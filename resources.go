// Copyright 2016-2018, Pulumi Corporation.  All rights reserved.

package do

import (
	"unicode"

	"github.com/hashicorp/terraform/helper/schema"
	"github.com/terraform-providers/terraform-provider-digitalocean/digitalocean"

	"github.com/pulumi/pulumi-terraform/pkg/tfbridge"
	//"github.com/pulumi/pulumi/pkg/resource"
	"github.com/pulumi/pulumi/pkg/tokens"
)

// all of the Digital Ocean Platform token components used below.
const (
	// packages:
	doPackage = "do"
	doCore    = "core" // All resources
)

// doMember manufactures a type token for the DO package and the given module and type.
func doMember(mod string, mem string) tokens.ModuleMember {
	return tokens.ModuleMember(doPackage + ":" + mod + ":" + mem)
}

// doType manufactures a type token for the DO package and the given module and type.
func doType(mod string, typ string) tokens.Type {
	return tokens.Type(doMember(mod, typ))
}

// doDataSource manufactures a standard resource token given a module and resource name.  It automatically uses the Digital Ocean
// package and names the file by simply lower casing the data source's first character.
func doDataSource(mod string, res string) tokens.ModuleMember {
	fn := string(unicode.ToLower(rune(res[0]))) + res[1:]
	return doMember(mod+"/"+fn, res)
}

// doResource manufactures a standard resource token given a module and resource name.  It automatically uses the Digital Ocean
// package and names the file by simply lower casing the resource's first character.
func doResource(mod string, res string) tokens.Type {
	fn := string(unicode.ToLower(rune(res[0]))) + res[1:]
	return doType(mod+"/"+fn, res)
}

// Provider returns additional overlaid schema and metadata associated with the do package.
func Provider() tfbridge.ProviderInfo {
	p := digitalocean.Provider().(*schema.Provider)
	prov := tfbridge.ProviderInfo{
		P:           p,
		Name:        "digitalocean",
		Description: "A Pulumi package for creating and managing Digital Ocean resources.",
		Keywords:    []string{"pulumi", "do"},
		License:     "Apache-2.0",
		Homepage:    "https://pulumi.io",
		Repository:  "https://github.com/jaxxstorm/pulumi-do",
		Config: map[string]*tfbridge.SchemaInfo{
			"token": &tfbridge.SchemaInfo{
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{
						"DO_TOKEN",
						"DIGITAL_OCEAN_TOKEN",
						"DIGITALOCEAN_TOKEN",
					},
				},
			},
		},
		Resources: map[string]*tfbridge.ResourceInfo{
			"digitalocean_droplet": {
				Tok: doResource(doCore, "Droplet"),
				Docs: &tfbridge.DocInfo{
					Source: "droplet.html.markdown",
				},
			},
			"digitalocean_certificate": {
				Tok: doResource(doCore, "Certificate"),
				Docs: &tfbridge.DocInfo{
					Source: "certificate.html.markdown",
				},
			},
			"digitalocean_domain": {
				Tok: doResource(doCore, "Domain"),
				Docs: &tfbridge.DocInfo{
					Source: "domain.html.markdown",
				},
			},
			"digitalocean_firewall": {
				Tok: doResource(doCore, "Firewall"),
				Docs: &tfbridge.DocInfo{
					Source: "firewall.html.markdown",
				},
			},
			"digitalocean_floating_ip": {
				Tok: doResource(doCore, "FloatingIP"),
				Docs: &tfbridge.DocInfo{
					Source: "floating_ip.html.markdown",
				},
			},
			"digitalocean_loadbalancer": {
				Tok: doResource(doCore, "LoadBalancer"),
				Docs: &tfbridge.DocInfo{
					Source: "loadbalancer.html.markdown",
				},
			},
			"digitalocean_record": {
				Tok: doResource(doCore, "DNSRecord"),
				Docs: &tfbridge.DocInfo{
					Source: "record.html.markdown",
				},
			},
			"digitalocean_ssh_key": {
				Tok: doResource(doCore, "SSHKey"),
				Docs: &tfbridge.DocInfo{
					Source: "ssh_key.html.markdown",
				},
			},
			"digitalocean_tag": {
				Tok: doResource(doCore, "Tag"),
				Docs: &tfbridge.DocInfo{
					Source: "tag.html.markdown",
				},
			},
			"digitalocean_volume": {
				Tok: doResource(doCore, "Volume"),
				Docs: &tfbridge.DocInfo{
					Source: "volume.html.markdown",
				},
			},
			"digitalocean_volume_attachment": {
				Tok: doResource(doCore, "VolumeAttachment"),
				Docs: &tfbridge.DocInfo{
					Source: "volume_attachment.html.markdown",
				},
			},
			"digitalocean_volume_snapshot": {
				Tok: doResource(doCore, "VolumeSnapshot"),
				Docs: &tfbridge.DocInfo{
					Source: "volume_snapshot.html.markdown",
				},
			},
		},
		DataSources: map[string]*tfbridge.DataSourceInfo{
			"digitalocean_image":           {Tok: doDataSource(doCore, "getImage")},
			"digitalocean_certificate":     {Tok: doDataSource(doCore, "getCertificate")},
			"digitalocean_domain":          {Tok: doDataSource(doCore, "getDomain")},
			"digitalocean_droplet":         {Tok: doDataSource(doCore, "getDroplet")},
			"digitalocean_floating_ip":     {Tok: doDataSource(doCore, "getFloatingIP")},
			"digitalocean_loadbalancer":    {Tok: doDataSource(doCore, "getLoadBalancer")},
			"digitalocean_record":          {Tok: doDataSource(doCore, "getDNSRecord")},
			"digitalocean_ssh_key":         {Tok: doDataSource(doCore, "getSSHKey")},
			"digitalocean_tag":             {Tok: doDataSource(doCore, "getTag")},
			"digitalocean_volume":          {Tok: doDataSource(doCore, "getVolume")},
			"digitalocean_volume_snapshot": {Tok: doDataSource(doCore, "getVolumeSnapshot")},
		},
		JavaScript: &tfbridge.JavaScriptInfo{
			Dependencies: map[string]string{
				"@pulumi/pulumi":    "^0.15.1",
				"read-package-json": "^2.0.13",
				"@types/express":    "^4.16.0",
			},
			DevDependencies: map[string]string{
				"@types/node": "^8.0.25", // so we can access strongly typed node definitions.
			},
			Overlay: &tfbridge.OverlayInfo{},
		},
	}

	// For all resources with name properties, we will add an auto-name property.  Make sure to skip those that
	// already have a name mapping entry, since those may have custom overrides set above (e.g., for length).
	const doName = "name"
	for resname, res := range prov.Resources {
		if schema := p.ResourcesMap[resname]; schema != nil {
			// Only apply auto-name to input properties (Optional || Required) named `name`
			if tfs, has := schema.Schema[doName]; has && (tfs.Optional || tfs.Required) {
				if _, hasfield := res.Fields[doName]; !hasfield {
					if res.Fields == nil {
						res.Fields = make(map[string]*tfbridge.SchemaInfo)
					}
					// Use conservative options that apply broadly for Digital Ocean.  See
					// details.
					res.Fields[doName] = tfbridge.AutoName(doName, 255)
				}
			}
		}
	}

	return prov
}
