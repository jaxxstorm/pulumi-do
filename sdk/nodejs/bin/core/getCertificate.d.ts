import * as pulumi from "@pulumi/pulumi";
export declare function getCertificate(args: GetCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateResult>;
/**
 * A collection of arguments for invoking getCertificate.
 */
export interface GetCertificateArgs {
    readonly name: string;
}
/**
 * A collection of values returned by getCertificate.
 */
export interface GetCertificateResult {
    readonly domains: string[];
    readonly notAfter: string;
    readonly sha1Fingerprint: string;
    readonly state: string;
    readonly type: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
