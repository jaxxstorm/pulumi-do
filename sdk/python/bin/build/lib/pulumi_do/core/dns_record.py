# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class DNSRecord(pulumi.CustomResource):
    """
    Provides a DigitalOcean DNS record resource.
    """
    def __init__(__self__, __name__, __opts__=None, domain=None, flags=None, name=None, port=None, priority=None, tag=None, ttl=None, type=None, value=None, weight=None):
        """Create a DNSRecord resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not domain:
            raise TypeError('Missing required property domain')
        elif not isinstance(domain, basestring):
            raise TypeError('Expected property domain to be a basestring')
        __self__.domain = domain
        """
        The domain to add the record to
        """
        __props__['domain'] = domain

        if flags and not isinstance(flags, int):
            raise TypeError('Expected property flags to be a int')
        __self__.flags = flags
        """
        The flags of the record (integer between 0-255), for CAA records.
        """
        __props__['flags'] = flags

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The name of the record
        """
        __props__['name'] = name

        if port and not isinstance(port, int):
            raise TypeError('Expected property port to be a int')
        __self__.port = port
        """
        The port of the record, for SRV records.
        """
        __props__['port'] = port

        if priority and not isinstance(priority, int):
            raise TypeError('Expected property priority to be a int')
        __self__.priority = priority
        """
        The priority of the record, for MX and SRV
        records.
        """
        __props__['priority'] = priority

        if tag and not isinstance(tag, basestring):
            raise TypeError('Expected property tag to be a basestring')
        __self__.tag = tag
        """
        The tag of the record (one of `issue`, `wildissue`, or `iodef`), for CAA records.
        """
        __props__['tag'] = tag

        if ttl and not isinstance(ttl, int):
            raise TypeError('Expected property ttl to be a int')
        __self__.ttl = ttl
        """
        The time to live for the record, in seconds.
        """
        __props__['ttl'] = ttl

        if not type:
            raise TypeError('Missing required property type')
        elif not isinstance(type, basestring):
            raise TypeError('Expected property type to be a basestring')
        __self__.type = type
        """
        The type of record
        """
        __props__['type'] = type

        if not value:
            raise TypeError('Missing required property value')
        elif not isinstance(value, basestring):
            raise TypeError('Expected property value to be a basestring')
        __self__.value = value
        """
        The value of the record
        """
        __props__['value'] = value

        if weight and not isinstance(weight, int):
            raise TypeError('Expected property weight to be a int')
        __self__.weight = weight
        """
        The weight of the record, for SRV records.
        """
        __props__['weight'] = weight

        __self__.fqdn = pulumi.runtime.UNKNOWN
        """
        The FQDN of the record
        """

        super(DNSRecord, __self__).__init__(
            'do:core/dNSRecord:DNSRecord',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'domain' in outs:
            self.domain = outs['domain']
        if 'flags' in outs:
            self.flags = outs['flags']
        if 'fqdn' in outs:
            self.fqdn = outs['fqdn']
        if 'name' in outs:
            self.name = outs['name']
        if 'port' in outs:
            self.port = outs['port']
        if 'priority' in outs:
            self.priority = outs['priority']
        if 'tag' in outs:
            self.tag = outs['tag']
        if 'ttl' in outs:
            self.ttl = outs['ttl']
        if 'type' in outs:
            self.type = outs['type']
        if 'value' in outs:
            self.value = outs['value']
        if 'weight' in outs:
            self.weight = outs['weight']
