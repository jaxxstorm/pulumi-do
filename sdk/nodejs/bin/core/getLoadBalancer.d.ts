import * as pulumi from "@pulumi/pulumi";
export declare function getLoadBalancer(args: GetLoadBalancerArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalancerResult>;
/**
 * A collection of arguments for invoking getLoadBalancer.
 */
export interface GetLoadBalancerArgs {
    readonly name: string;
}
/**
 * A collection of values returned by getLoadBalancer.
 */
export interface GetLoadBalancerResult {
    readonly algorithm: string;
    readonly dropletIds: number[];
    readonly dropletTag: string;
    readonly forwardingRules: {
        certificateId: string;
        entryPort: number;
        entryProtocol: string;
        targetPort: number;
        targetProtocol: string;
        tlsPassthrough: boolean;
    }[];
    readonly healthcheck: {
        checkIntervalSeconds: number;
        healthyThreshold: number;
        path: string;
        port: number;
        protocol: string;
        responseTimeoutSeconds: number;
        unhealthyThreshold: number;
    };
    readonly ip: string;
    readonly redirectHttpToHttps: boolean;
    readonly region: string;
    readonly status: string;
    readonly stickySessions: {
        cookieName: string;
        cookieTtlSeconds: number;
        type: string;
    };
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
