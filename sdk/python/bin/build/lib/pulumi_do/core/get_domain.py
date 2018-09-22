# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class GetDomainResult(object):
    """
    A collection of values returned by getDomain.
    """
    def __init__(__self__, ttl=None, zone_file=None, id=None):
        if ttl and not isinstance(ttl, int):
            raise TypeError('Expected argument ttl to be a int')
        __self__.ttl = ttl
        if zone_file and not isinstance(zone_file, basestring):
            raise TypeError('Expected argument zone_file to be a basestring')
        __self__.zone_file = zone_file
        if id and not isinstance(id, basestring):
            raise TypeError('Expected argument id to be a basestring')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

def get_domain(name=None):
    """
    Get information on a domain. This data source provides the name, TTL, and zone
    file as configured on your Digital Ocean account. This is useful if the domain
    name in question is not managed by Terraform or you need to utilize TTL or zone
    file data.
    
    An error is triggered if the provided domain name is not managed with your
    Digital Ocean account.
    """
    __args__ = dict()

    __args__['name'] = name
    __ret__ = pulumi.runtime.invoke('do:core/getDomain:getDomain', __args__)

    return GetDomainResult(
        ttl=__ret__.get('ttl'),
        zone_file=__ret__.get('zoneFile'),
        id=__ret__.get('id'))
