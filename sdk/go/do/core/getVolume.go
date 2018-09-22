// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package core

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

func LookupVolume(ctx *pulumi.Context, args *GetVolumeArgs) (*GetVolumeResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["description"] = args.Description
		inputs["name"] = args.Name
		inputs["region"] = args.Region
	}
	outputs, err := ctx.Invoke("do:core/getVolume:getVolume", inputs)
	if err != nil {
		return nil, err
	}
	return &GetVolumeResult{
		DropletIds: outputs["dropletIds"],
		FilesystemLabel: outputs["filesystemLabel"],
		FilesystemType: outputs["filesystemType"],
		Size: outputs["size"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getVolume.
type GetVolumeArgs struct {
	Description interface{}
	Name interface{}
	Region interface{}
}

// A collection of values returned by getVolume.
type GetVolumeResult struct {
	DropletIds interface{}
	FilesystemLabel interface{}
	FilesystemType interface{}
	Size interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
