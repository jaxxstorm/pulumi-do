import * as pulumi from "@pulumi/pulumi";
export declare function getDroplet(args: GetDropletArgs, opts?: pulumi.InvokeOptions): Promise<GetDropletResult>;
/**
 * A collection of arguments for invoking getDroplet.
 */
export interface GetDropletArgs {
    readonly name: string;
}
/**
 * A collection of values returned by getDroplet.
 */
export interface GetDropletResult {
    readonly backups: boolean;
    readonly disk: number;
    readonly image: string;
    readonly ipv4Address: string;
    readonly ipv4AddressPrivate: string;
    readonly ipv6: boolean;
    readonly ipv6Address: string;
    readonly ipv6AddressPrivate: string;
    readonly locked: boolean;
    readonly memory: number;
    readonly monitoring: boolean;
    readonly priceHourly: number;
    readonly priceMonthly: number;
    readonly privateNetworking: boolean;
    readonly region: string;
    readonly size: string;
    readonly status: string;
    readonly tags: string[];
    readonly vcpus: number;
    readonly volumeIds: string[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
