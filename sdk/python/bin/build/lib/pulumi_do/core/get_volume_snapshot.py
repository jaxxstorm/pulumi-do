# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class GetVolumeSnapshotResult(object):
    """
    A collection of values returned by getVolumeSnapshot.
    """
    def __init__(__self__, created_at=None, min_disk_size=None, regions=None, size=None, volume_id=None, id=None):
        if created_at and not isinstance(created_at, basestring):
            raise TypeError('Expected argument created_at to be a basestring')
        __self__.created_at = created_at
        if min_disk_size and not isinstance(min_disk_size, int):
            raise TypeError('Expected argument min_disk_size to be a int')
        __self__.min_disk_size = min_disk_size
        if regions and not isinstance(regions, list):
            raise TypeError('Expected argument regions to be a list')
        __self__.regions = regions
        if size and not isinstance(size, float):
            raise TypeError('Expected argument size to be a float')
        __self__.size = size
        if volume_id and not isinstance(volume_id, basestring):
            raise TypeError('Expected argument volume_id to be a basestring')
        __self__.volume_id = volume_id
        if id and not isinstance(id, basestring):
            raise TypeError('Expected argument id to be a basestring')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

def get_volume_snapshot(most_recent=None, name=None, name_regex=None, region=None):
    __args__ = dict()

    __args__['mostRecent'] = most_recent
    __args__['name'] = name
    __args__['nameRegex'] = name_regex
    __args__['region'] = region
    __ret__ = pulumi.runtime.invoke('do:core/getVolumeSnapshot:getVolumeSnapshot', __args__)

    return GetVolumeSnapshotResult(
        created_at=__ret__.get('createdAt'),
        min_disk_size=__ret__.get('minDiskSize'),
        regions=__ret__.get('regions'),
        size=__ret__.get('size'),
        volume_id=__ret__.get('volumeId'),
        id=__ret__.get('id'))
