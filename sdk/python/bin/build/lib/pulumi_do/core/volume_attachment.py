# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class VolumeAttachment(pulumi.CustomResource):
    def __init__(__self__, __name__, __opts__=None, droplet_id=None, volume_id=None):
        """Create a VolumeAttachment resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not droplet_id:
            raise TypeError('Missing required property droplet_id')
        elif not isinstance(droplet_id, int):
            raise TypeError('Expected property droplet_id to be a int')
        __self__.droplet_id = droplet_id
        __props__['dropletId'] = droplet_id

        if not volume_id:
            raise TypeError('Missing required property volume_id')
        elif not isinstance(volume_id, basestring):
            raise TypeError('Expected property volume_id to be a basestring')
        __self__.volume_id = volume_id
        __props__['volumeId'] = volume_id

        super(VolumeAttachment, __self__).__init__(
            'do:core/volumeAttachment:VolumeAttachment',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'dropletId' in outs:
            self.droplet_id = outs['dropletId']
        if 'volumeId' in outs:
            self.volume_id = outs['volumeId']
