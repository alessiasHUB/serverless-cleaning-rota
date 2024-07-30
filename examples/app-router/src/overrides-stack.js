"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverridesStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const cdk_nextjs_standalone_1 = require("cdk-nextjs-standalone");
const aws_cloudfront_1 = require("aws-cdk-lib/aws-cloudfront");
const aws_cdk_lib_2 = require("aws-cdk-lib");
const aws_dynamodb_1 = require("aws-cdk-lib/aws-dynamodb");
const aws_cdk_lib_3 = require("aws-cdk-lib");
/**
 * This stack showcases how to use the `overrides` prop.
 */
class OverridesStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const nextjs = new cdk_nextjs_standalone_1.Nextjs(this, 'nextjs', {
            nextjsPath: '../../open-next/examples/app-router',
            buildCommand: 'npx open-next@^2 build',
            // skipBuild: true,
            overrides: {
                nextjs: {
                    nextjsBuildProps: {},
                    nextjsDistributionProps: {},
                    nextjsDomainProps: {},
                    nextjsImageProps: {},
                    nextjsInvalidationProps: {},
                    nextjsRevalidationProps: {},
                    nextjsServerProps: {},
                    nextjsStaticAssetsProps: {},
                },
                nextjsBucketDeployment: {
                    functionProps: {
                        memorySize: 512,
                    }
                },
                nextjsDistribution: {
                    cloudFrontFunctionProps: {
                        comment: "My CloudFront Function"
                    },
                    distributionProps: {
                        priceClass: aws_cloudfront_1.PriceClass.PRICE_CLASS_100,
                    },
                    edgeFunctionProps: {
                        memorySize: 256
                    },
                    imageBehaviorOptions: {},
                    imageCachePolicyProps: {
                        maxTtl: aws_cdk_lib_2.Duration.days(30),
                    },
                    imageHttpOriginProps: {
                        customHeaders: { "x-custom-image-header": "1" }
                    },
                    s3OriginProps: {
                        customHeaders: { "x-custom-s3-header": "3" }
                    },
                    serverBehaviorOptions: {},
                    serverCachePolicyProps: {
                        maxTtl: aws_cdk_lib_2.Duration.seconds(10),
                    },
                    serverHttpOriginProps: {
                        customHeaders: { "x-custom-server-header": "2" }
                    },
                    staticBehaviorOptions: {
                        smoothStreaming: true,
                    },
                },
                nextjsDomain: {
                    aaaaRecordProps: {
                        ttl: aws_cdk_lib_2.Duration.minutes(45)
                    },
                    aRecordProps: {
                        ttl: aws_cdk_lib_2.Duration.minutes(15)
                    },
                    certificateProps: {
                        transparencyLoggingEnabled: true,
                    },
                    hostedZoneProviderProps: {},
                },
                nextjsImage: {
                    functionProps: {
                        memorySize: 640,
                    },
                },
                nextjsInvalidation: {
                    awsCustomResourceProps: {
                        timeout: aws_cdk_lib_2.Duration.minutes(3),
                    },
                },
                nextjsRevalidation: {
                    insertCustomResourceProps: {},
                    insertFunctionProps: {
                        memorySize: 768,
                    },
                    insertProviderProps: {
                        totalTimeout: aws_cdk_lib_2.Duration.minutes(1),
                    },
                    queueFunctionProps: {
                        memorySize: 896,
                    },
                    queueProps: {
                        visibilityTimeout: aws_cdk_lib_2.Duration.seconds(45),
                    },
                    tableProps: {
                        billing: aws_dynamodb_1.Billing.provisioned({
                            readCapacity: aws_dynamodb_1.Capacity.autoscaled({ maxCapacity: 10 }),
                            writeCapacity: aws_dynamodb_1.Capacity.autoscaled({ maxCapacity: 10 }),
                        })
                    },
                },
                nextjsServer: {
                    nextjsBucketDeploymentProps: {},
                    destinationCodeAssetProps: {
                        exclude: ["secrets"],
                    },
                    functionProps: {
                        memorySize: 1024,
                    },
                    sourceCodeAssetProps: {
                        exclude: ["secrets"],
                    },
                },
                nextjsStaticAssets: {
                    assetProps: {
                        followSymlinks: aws_cdk_lib_3.SymlinkFollowMode.BLOCK_EXTERNAL,
                    },
                    bucketProps: {
                        versioned: true,
                    },
                    nextjsBucketDeploymentProps: {},
                },
            }
        });
        new aws_cdk_lib_1.CfnOutput(this, "CloudFrontDistributionDomain", {
            value: nextjs.distribution.distributionDomain,
        });
    }
}
exports.OverridesStack = OverridesStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnJpZGVzLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3ZlcnJpZGVzLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFrRTtBQUVsRSxpRUFBK0M7QUFDL0MsK0RBQXdEO0FBQ3hELDZDQUF1QztBQUN2QywyREFBNkQ7QUFDN0QsNkNBQWdEO0FBRWhEOztHQUVHO0FBQ0gsTUFBYSxjQUFlLFNBQVEsbUJBQUs7SUFDdkMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLE1BQU0sR0FBRyxJQUFJLDhCQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtZQUN4QyxVQUFVLEVBQUUscUNBQXFDO1lBQ2pELFlBQVksRUFBRSx3QkFBd0I7WUFDdEMsbUJBQW1CO1lBQ25CLFNBQVMsRUFBRTtnQkFDVCxNQUFNLEVBQUU7b0JBQ04sZ0JBQWdCLEVBQUUsRUFBRTtvQkFDcEIsdUJBQXVCLEVBQUUsRUFBRTtvQkFDM0IsaUJBQWlCLEVBQUUsRUFBRTtvQkFDckIsZ0JBQWdCLEVBQUUsRUFBRTtvQkFDcEIsdUJBQXVCLEVBQUUsRUFBRTtvQkFDM0IsdUJBQXVCLEVBQUUsRUFBRTtvQkFDM0IsaUJBQWlCLEVBQUUsRUFBRTtvQkFDckIsdUJBQXVCLEVBQUUsRUFBRTtpQkFDNUI7Z0JBQ0Qsc0JBQXNCLEVBQUU7b0JBQ3RCLGFBQWEsRUFBRTt3QkFDYixVQUFVLEVBQUUsR0FBRztxQkFDaEI7aUJBQ0Y7Z0JBQ0Qsa0JBQWtCLEVBQUU7b0JBQ2xCLHVCQUF1QixFQUFFO3dCQUN2QixPQUFPLEVBQUUsd0JBQXdCO3FCQUNsQztvQkFDRCxpQkFBaUIsRUFBRTt3QkFDakIsVUFBVSxFQUFFLDJCQUFVLENBQUMsZUFBZTtxQkFDdkM7b0JBQ0QsaUJBQWlCLEVBQUU7d0JBQ2pCLFVBQVUsRUFBRSxHQUFH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Q0FBQyxrQkFBa0I7U0FDOUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBOUhELHdDQThIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENmbk91dHB1dCwgU3RhY2ssIFN0YWNrUHJvcHMsIFRva2VuIH0gZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgeyBOZXh0anMgfSBmcm9tICdjZGstbmV4dGpzLXN0YW5kYWxvbmUnO1xuaW1wb3J0IHsgUHJpY2VDbGFzcyB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1jbG91ZGZyb250JztcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQmlsbGluZywgQ2FwYWNpdHkgfSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtZHluYW1vZGInO1xuaW1wb3J0IHsgU3ltbGlua0ZvbGxvd01vZGUgfSBmcm9tICdhd3MtY2RrLWxpYic7XG5cbi8qKlxuICogVGhpcyBzdGFjayBzaG93Y2FzZXMgaG93IHRvIHVzZSB0aGUgYG92ZXJyaWRlc2AgcHJvcC5cbiAqL1xuZXhwb3J0IGNsYXNzIE92ZXJyaWRlc1N0YWNrIGV4dGVuZHMgU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IFN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IG5leHRqcyA9IG5ldyBOZXh0anModGhpcywgJ25leHRqcycsIHtcbiAgICAgIG5leHRqc1BhdGg6ICcuLi8uLi9vcGVuLW5leHQvZXhhbXBsZXMvYXBwLXJvdXRlcicsXG4gICAgICBidWlsZENvbW1hbmQ6ICducHggb3Blbi1uZXh0QF4yIGJ1aWxkJyxcbiAgICAgIC8vIHNraXBCdWlsZDogdHJ1ZSxcbiAgICAgIG92ZXJyaWRlczoge1xuICAgICAgICBuZXh0anM6IHtcbiAgICAgICAgICBuZXh0anNCdWlsZFByb3BzOiB7fSxcbiAgICAgICAgICBuZXh0anNEaXN0cmlidXRpb25Qcm9wczoge30sXG4gICAgICAgICAgbmV4dGpzRG9tYWluUHJvcHM6IHt9LFxuICAgICAgICAgIG5leHRqc0ltYWdlUHJvcHM6IHt9LFxuICAgICAgICAgIG5leHRqc0ludmFsaWRhdGlvblByb3BzOiB7fSxcbiAgICAgICAgICBuZXh0anNSZXZhbGlkYXRpb25Qcm9wczoge30sXG4gICAgICAgICAgbmV4dGpzU2VydmVyUHJvcHM6IHt9LFxuICAgICAgICAgIG5leHRqc1N0YXRpY0Fzc2V0c1Byb3BzOiB7fSxcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dGpzQnVja2V0RGVwbG95bWVudDoge1xuICAgICAgICAgIGZ1bmN0aW9uUHJvcHM6IHtcbiAgICAgICAgICAgIG1lbW9yeVNpemU6IDUxMixcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG5leHRqc0Rpc3RyaWJ1dGlvbjoge1xuICAgICAgICAgIGNsb3VkRnJvbnRGdW5jdGlvblByb3BzOiB7XG4gICAgICAgICAgICBjb21tZW50OiBcIk15IENsb3VkRnJvbnQgRnVuY3Rpb25cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGlzdHJpYnV0aW9uUHJvcHM6IHtcbiAgICAgICAgICAgIHByaWNlQ2xhc3M6IFByaWNlQ2xhc3MuUFJJQ0VfQ0xBU1NfMTAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZWRnZUZ1bmN0aW9uUHJvcHM6IHtcbiAgICAgICAgICAgIG1lbW9yeVNpemU6IDI1NlxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW1hZ2VCZWhhdmlvck9wdGlvbnM6IHt9LFxuICAgICAgICAgIGltYWdlQ2FjaGVQb2xpY3lQcm9wczoge1xuICAgICAgICAgICAgbWF4VHRsOiBEdXJhdGlvbi5kYXlzKDMwKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGltYWdlSHR0cE9yaWdpblByb3BzOiB7XG4gICAgICAgICAgICBjdXN0b21IZWFkZXJzOiB7IFwieC1jdXN0b20taW1hZ2UtaGVhZGVyXCI6IFwiMVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHMzT3JpZ2luUHJvcHM6IHtcbiAgICAgICAgICAgIGN1c3RvbUhlYWRlcnM6IHsgXCJ4LWN1c3RvbS1zMy1oZWFkZXJcIjogXCIzXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VydmVyQmVoYXZpb3JPcHRpb25zOiB7fSxcbiAgICAgICAgICBzZXJ2ZXJDYWNoZVBvbGljeVByb3BzOiB7XG4gICAgICAgICAgICBtYXhUdGw6IER1cmF0aW9uLnNlY29uZHMoMTApLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VydmVySHR0cE9yaWdpblByb3BzOiB7XG4gICAgICAgICAgICBjdXN0b21IZWFkZXJzOiB7IFwieC1jdXN0b20tc2VydmVyLWhlYWRlclwiOiBcIjJcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdGF0aWNCZWhhdmlvck9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNtb290aFN0cmVhbWluZzogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBuZXh0anNEb21haW46IHtcbiAgICAgICAgICBhYWFhUmVjb3JkUHJvcHM6IHtcbiAgICAgICAgICAgIHR0bDogRHVyYXRpb24ubWludXRlcyg0NSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFSZWNvcmRQcm9wczoge1xuICAgICAgICAgICAgdHRsOiBEdXJhdGlvbi5taW51dGVzKDE1KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2VydGlmaWNhdGVQcm9wczoge1xuICAgICAgICAgICAgdHJhbnNwYXJlbmN5TG9nZ2luZ0VuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBob3N0ZWRab25lUHJvdmlkZXJQcm9wczoge30sXG4gICAgICAgIH0sXG4gICAgICAgIG5leHRqc0ltYWdlOiB7XG4gICAgICAgICAgZnVuY3Rpb25Qcm9wczoge1xuICAgICAgICAgICAgbWVtb3J5U2l6ZTogNjQwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG5leHRqc0ludmFsaWRhdGlvbjoge1xuICAgICAgICAgIGF3c0N1c3RvbVJlc291cmNlUHJvcHM6IHtcbiAgICAgICAgICAgIHRpbWVvdXQ6IER1cmF0aW9uLm1pbnV0ZXMoMyksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dGpzUmV2YWxpZGF0aW9uOiB7XG4gICAgICAgICAgaW5zZXJ0Q3VzdG9tUmVzb3VyY2VQcm9wczoge30sXG4gICAgICAgICAgaW5zZXJ0RnVuY3Rpb25Qcm9wczoge1xuICAgICAgICAgICAgbWVtb3J5U2l6ZTogNzY4LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5zZXJ0UHJvdmlkZXJQcm9wczoge1xuICAgICAgICAgICAgdG90YWxUaW1lb3V0OiBEdXJhdGlvbi5taW51dGVzKDEpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcXVldWVGdW5jdGlvblByb3BzOiB7XG4gICAgICAgICAgICBtZW1vcnlTaXplOiA4OTYsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBxdWV1ZVByb3BzOiB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5VGltZW91dDogRHVyYXRpb24uc2Vjb25kcyg0NSksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YWJsZVByb3BzOiB7XG4gICAgICAgICAgICBiaWxsaW5nOiBCaWxsaW5nLnByb3Zpc2lvbmVkKHtcbiAgICAgICAgICAgICAgcmVhZENhcGFjaXR5OiBDYXBhY2l0eS5hdXRvc2NhbGVkKHsgbWF4Q2FwYWNpdHk6IDEwIH0pLFxuICAgICAgICAgICAgICB3cml0ZUNhcGFjaXR5OiBDYXBhY2l0eS5hdXRvc2NhbGVkKHsgbWF4Q2FwYWNpdHk6IDEwIH0pLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBuZXh0anNTZXJ2ZXI6IHtcbiAgICAgICAgICBuZXh0anNCdWNrZXREZXBsb3ltZW50UHJvcHM6IHt9LFxuICAgICAgICAgIGRlc3RpbmF0aW9uQ29kZUFzc2V0UHJvcHM6IHtcbiAgICAgICAgICAgIGV4Y2x1ZGU6IFtcInNlY3JldHNcIl0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvblByb3BzOiB7XG4gICAgICAgICAgICBtZW1vcnlTaXplOiAxMDI0LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc291cmNlQ29kZUFzc2V0UHJvcHM6IHtcbiAgICAgICAgICAgIGV4Y2x1ZGU6IFtcInNlY3JldHNcIl0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dGpzU3RhdGljQXNzZXRzOiB7XG4gICAgICAgICAgYXNzZXRQcm9wczoge1xuICAgICAgICAgICAgZm9sbG93U3ltbGlua3M6IFN5bWxpbmtGb2xsb3dNb2RlLkJMT0NLX0VYVEVSTkFMLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYnVja2V0UHJvcHM6IHtcbiAgICAgICAgICAgIHZlcnNpb25lZDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5leHRqc0J1Y2tldERlcGxveW1lbnRQcm9wczoge30sXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBuZXcgQ2ZuT3V0cHV0KHRoaXMsIFwiQ2xvdWRGcm9udERpc3RyaWJ1dGlvbkRvbWFpblwiLCB7XG4gICAgICB2YWx1ZTogbmV4dGpzLmRpc3RyaWJ1dGlvbi5kaXN0cmlidXRpb25Eb21haW4sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==