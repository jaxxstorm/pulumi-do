# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class Volume(pulumi.CustomResource):
    """
    Provides a DigitalOcean Block Storage volume which can be attached to a Droplet in order to provide expanded storage.
    """
    def __init__(__self__, __name__, __opts__=None, description=None, filesystem_type=None, initial_filesystem_label=None, initial_filesystem_type=None, name=None, region=None, size=None, snapshot_id=None):
        """Create a Volume resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if description and not isinstance(description, basestring):
            raise TypeError('Expected property description to be a basestring')
        __self__.description = description
        """
        A free-form text field up to a limit of 1024 bytes to describe a block storage volume.
        """
        __props__['description'] = description

        if filesystem_type and not isinstance(filesystem_type, basestring):
            raise TypeError('Expected property filesystem_type to be a basestring')
        __self__.filesystem_type = filesystem_type
        __props__['filesystemType'] = filesystem_type

        if initial_filesystem_label and not isinstance(initial_filesystem_label, basestring):
            raise TypeError('Expected property initial_filesystem_label to be a basestring')
        __self__.initial_filesystem_label = initial_filesystem_label
        __props__['initialFilesystemLabel'] = initial_filesystem_label

        if initial_filesystem_type and not isinstance(initial_filesystem_type, basestring):
            raise TypeError('Expected property initial_filesystem_type to be a basestring')
        __self__.initial_filesystem_type = initial_filesystem_type
        __props__['initialFilesystemType'] = initial_filesystem_type

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        A name for the block storage volume. Must be lowercase and be composed only of numbers, letters and "-", up to a limit of 64 characters.
        """
        __props__['name'] = name

        if not region:
            raise TypeError('Missing required property region')
        elif not isinstance(region, basestring):
            raise TypeError('Expected property region to be a basestring')
        __self__.region = region
        """
        The region that the block storage volume will be created in.
        """
        __props__['region'] = region

        if not size:
            raise TypeError('Missing required property size')
        elif not isinstance(size, int):
            raise TypeError('Expected property size to be a int')
        __self__.size = size
        """
        The size of the block storage volume in GiB.
        """
        __props__['size'] = size

        if snapshot_id and not isinstance(snapshot_id, basestring):
            raise TypeError('Expected property snapshot_id to be a basestring')
        __self__.snapshot_id = snapshot_id
        __props__['snapshotId'] = snapshot_id

        __self__.droplet_ids = pulumi.runtime.UNKNOWN
        """
        A list of associated droplet ids
        """
        __self__.filesystem_label = pulumi.runtime.UNKNOWN

        super(Volume, __self__).__init__(
            'do:core/volume:Volume',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'description' in outs:
            self.description = outs['description']
        if 'dropletIds' in outs:
            self.droplet_ids = outs['dropletIds']
        if 'filesystemLabel' in outs:
            self.filesystem_label = outs['filesystemLabel']
        if 'filesystemType' in outs:
            self.filesystem_type = outs['filesystemType']
        if 'initialFilesystemLabel' in outs:
            self.initial_filesystem_label = outs['initialFilesystemLabel']
        if 'initialFilesystemType' in outs:
            self.initial_filesystem_type = outs['initialFilesystemType']
        if 'name' in outs:
            self.name = outs['name']
        if 'region' in outs:
            self.region = outs['region']
        if 'size' in outs:
            self.size = outs['size']
        if 'snapshotId' in outs:
            self.snapshot_id = outs['snapshotId']