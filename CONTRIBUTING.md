# Contributing to Pulumi

Do you want to hack on Pulumi?  Awesome!  We are so happy to have you.

Please refer to the [main Pulumi repo](https://github.com/pulumi/pulumi/)'s [CONTRIBUTING.md file](
https://github.com/pulumi/pulumi/blob/master/CONTRIBUTING.md) for details on how to do so.

## Committing Generated Code

Code generated for Pulumi SDKs should be checked in as part of the pull request containing a
particular change. To generate code after making changes, run `make` from the root of this
repository.

If a large number of seemingly-unrelated diffs are produced by `make` (for example, lots of changes
to comments unrelated to the change you are making), ensure that the latest dependencies for the
provider are installed by running `make ensure` in the root of the repository.
