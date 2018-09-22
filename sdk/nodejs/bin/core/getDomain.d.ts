import * as pulumi from "@pulumi/pulumi";
/**
 * Get information on a domain. This data source provides the name, TTL, and zone
 * file as configured on your Digital Ocean account. This is useful if the domain
 * name in question is not managed by Terraform or you need to utilize TTL or zone
 * file data.
 *
 * An error is triggered if the provided domain name is not managed with your
 * Digital Ocean account.
 */
export declare function getDomain(args: GetDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainResult>;
/**
 * A collection of arguments for invoking getDomain.
 */
export interface GetDomainArgs {
    /**
     * The name of the domain.
     */
    readonly name: string;
}
/**
 * A collection of values returned by getDomain.
 */
export interface GetDomainResult {
    readonly ttl: number;
    readonly zoneFile: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
