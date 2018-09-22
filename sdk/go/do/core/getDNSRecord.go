// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package core

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Get information on a DNS record. This data source provides the name, TTL, and zone
// file as configured on your Digital Ocean account. This is useful if the record
// in question is not managed by Terraform.
// 
// An error is triggered if the provided domain name or record are not managed with
// your Digital Ocean account.
func LookupDNSRecord(ctx *pulumi.Context, args *GetDNSRecordArgs) (*GetDNSRecordResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["domain"] = args.Domain
		inputs["name"] = args.Name
	}
	outputs, err := ctx.Invoke("do:core/getDNSRecord:getDNSRecord", inputs)
	if err != nil {
		return nil, err
	}
	return &GetDNSRecordResult{
		Data: outputs["data"],
		Flags: outputs["flags"],
		Port: outputs["port"],
		Priority: outputs["priority"],
		Tag: outputs["tag"],
		Ttl: outputs["ttl"],
		Type: outputs["type"],
		Weight: outputs["weight"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getDNSRecord.
type GetDNSRecordArgs struct {
	// The domain name of the record.
	Domain interface{}
	// The name of the record.
	Name interface{}
}

// A collection of values returned by getDNSRecord.
type GetDNSRecordResult struct {
	Data interface{}
	Flags interface{}
	Port interface{}
	Priority interface{}
	Tag interface{}
	Ttl interface{}
	Type interface{}
	Weight interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}