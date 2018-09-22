import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a DigitalOcean DNS record resource.
 */
export declare class DNSRecord extends pulumi.CustomResource {
    /**
     * Get an existing DNSRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DNSRecordState): DNSRecord;
    /**
     * The domain to add the record to
     */
    readonly domain: pulumi.Output<string>;
    /**
     * The flags of the record (integer between 0-255), for CAA records.
     */
    readonly flags: pulumi.Output<number | undefined>;
    /**
     * The FQDN of the record
     */
    readonly fqdn: pulumi.Output<string>;
    /**
     * The name of the record
     */
    readonly name: pulumi.Output<string>;
    /**
     * The port of the record, for SRV records.
     */
    readonly port: pulumi.Output<number | undefined>;
    /**
     * The priority of the record, for MX and SRV
     * records.
     */
    readonly priority: pulumi.Output<number | undefined>;
    /**
     * The tag of the record (one of `issue`, `wildissue`, or `iodef`), for CAA records.
     */
    readonly tag: pulumi.Output<string | undefined>;
    /**
     * The time to live for the record, in seconds.
     */
    readonly ttl: pulumi.Output<number>;
    /**
     * The type of record
     */
    readonly type: pulumi.Output<string>;
    /**
     * The value of the record
     */
    readonly value: pulumi.Output<string>;
    /**
     * The weight of the record, for SRV records.
     */
    readonly weight: pulumi.Output<number | undefined>;
    /**
     * Create a DNSRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DNSRecordArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DNSRecord resources.
 */
export interface DNSRecordState {
    /**
     * The domain to add the record to
     */
    readonly domain?: pulumi.Input<string>;
    /**
     * The flags of the record (integer between 0-255), for CAA records.
     */
    readonly flags?: pulumi.Input<number>;
    /**
     * The FQDN of the record
     */
    readonly fqdn?: pulumi.Input<string>;
    /**
     * The name of the record
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The port of the record, for SRV records.
     */
    readonly port?: pulumi.Input<number>;
    /**
     * The priority of the record, for MX and SRV
     * records.
     */
    readonly priority?: pulumi.Input<number>;
    /**
     * The tag of the record (one of `issue`, `wildissue`, or `iodef`), for CAA records.
     */
    readonly tag?: pulumi.Input<string>;
    /**
     * The time to live for the record, in seconds.
     */
    readonly ttl?: pulumi.Input<number>;
    /**
     * The type of record
     */
    readonly type?: pulumi.Input<string>;
    /**
     * The value of the record
     */
    readonly value?: pulumi.Input<string>;
    /**
     * The weight of the record, for SRV records.
     */
    readonly weight?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a DNSRecord resource.
 */
export interface DNSRecordArgs {
    /**
     * The domain to add the record to
     */
    readonly domain: pulumi.Input<string>;
    /**
     * The flags of the record (integer between 0-255), for CAA records.
     */
    readonly flags?: pulumi.Input<number>;
    /**
     * The name of the record
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The port of the record, for SRV records.
     */
    readonly port?: pulumi.Input<number>;
    /**
     * The priority of the record, for MX and SRV
     * records.
     */
    readonly priority?: pulumi.Input<number>;
    /**
     * The tag of the record (one of `issue`, `wildissue`, or `iodef`), for CAA records.
     */
    readonly tag?: pulumi.Input<string>;
    /**
     * The time to live for the record, in seconds.
     */
    readonly ttl?: pulumi.Input<number>;
    /**
     * The type of record
     */
    readonly type: pulumi.Input<string>;
    /**
     * The value of the record
     */
    readonly value: pulumi.Input<string>;
    /**
     * The weight of the record, for SRV records.
     */
    readonly weight?: pulumi.Input<number>;
}
