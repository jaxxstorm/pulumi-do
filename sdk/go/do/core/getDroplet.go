// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package core

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

func LookupDroplet(ctx *pulumi.Context, args *GetDropletArgs) (*GetDropletResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
	}
	outputs, err := ctx.Invoke("do:core/getDroplet:getDroplet", inputs)
	if err != nil {
		return nil, err
	}
	return &GetDropletResult{
		Backups: outputs["backups"],
		Disk: outputs["disk"],
		Image: outputs["image"],
		Ipv4Address: outputs["ipv4Address"],
		Ipv4AddressPrivate: outputs["ipv4AddressPrivate"],
		Ipv6: outputs["ipv6"],
		Ipv6Address: outputs["ipv6Address"],
		Ipv6AddressPrivate: outputs["ipv6AddressPrivate"],
		Locked: outputs["locked"],
		Memory: outputs["memory"],
		Monitoring: outputs["monitoring"],
		PriceHourly: outputs["priceHourly"],
		PriceMonthly: outputs["priceMonthly"],
		PrivateNetworking: outputs["privateNetworking"],
		Region: outputs["region"],
		Size: outputs["size"],
		Status: outputs["status"],
		Tags: outputs["tags"],
		Vcpus: outputs["vcpus"],
		VolumeIds: outputs["volumeIds"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getDroplet.
type GetDropletArgs struct {
	Name interface{}
}

// A collection of values returned by getDroplet.
type GetDropletResult struct {
	Backups interface{}
	Disk interface{}
	Image interface{}
	Ipv4Address interface{}
	Ipv4AddressPrivate interface{}
	Ipv6 interface{}
	Ipv6Address interface{}
	Ipv6AddressPrivate interface{}
	Locked interface{}
	Memory interface{}
	Monitoring interface{}
	PriceHourly interface{}
	PriceMonthly interface{}
	PrivateNetworking interface{}
	Region interface{}
	Size interface{}
	Status interface{}
	Tags interface{}
	Vcpus interface{}
	VolumeIds interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}