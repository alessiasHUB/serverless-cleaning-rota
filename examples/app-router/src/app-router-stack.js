"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouterStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const cdk_nextjs_standalone_1 = require("cdk-nextjs-standalone");
/**
 * This stack showcases how to use cdk-nextjs with Next.js App Router
 */
class AppRouterStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const nextjs = new cdk_nextjs_standalone_1.Nextjs(this, 'nextjs', {
            nextjsPath: '../../open-next/examples/app-router',
            buildCommand: 'npx open-next@^2 build',
            // skipBuild: true,
        });
        new aws_cdk_lib_1.CfnOutput(this, "CloudFrontDistributionDomain", {
            value: nextjs.distribution.distributionDomain,
        });
    }
}
exports.AppRouterStack = AppRouterStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRlci1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC1yb3V0ZXItc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQWtFO0FBRWxFLGlFQUErQztBQUUvQzs7R0FFRztBQUNILE1BQWEsY0FBZSxTQUFRLG1CQUFLO0lBQ3ZDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBa0I7UUFDMUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxNQUFNLEdBQUcsSUFBSSw4QkFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7WUFDeEMsVUFBVSxFQUFFLHFDQUFxQztZQUNqRCxZQUFZLEVBQUUsd0JBQXdCO1lBQ3RDLG1CQUFtQjtTQUNwQixDQUFDLENBQUM7UUFFSCxJQUFJLHVCQUFTLENBQUMsSUFBSSxFQUFFLDhCQUE4QixFQUFFO1lBQ2xELEtBQUssRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLGtCQUFrQjtTQUM5QyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFkRCx3Q0FjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENmbk91dHB1dCwgU3RhY2ssIFN0YWNrUHJvcHMsIFRva2VuIH0gZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgeyBOZXh0anMgfSBmcm9tICdjZGstbmV4dGpzLXN0YW5kYWxvbmUnO1xuXG4vKipcbiAqIFRoaXMgc3RhY2sgc2hvd2Nhc2VzIGhvdyB0byB1c2UgY2RrLW5leHRqcyB3aXRoIE5leHQuanMgQXBwIFJvdXRlclxuICovXG5leHBvcnQgY2xhc3MgQXBwUm91dGVyU3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgbmV4dGpzID0gbmV3IE5leHRqcyh0aGlzLCAnbmV4dGpzJywge1xuICAgICAgbmV4dGpzUGF0aDogJy4uLy4uL29wZW4tbmV4dC9leGFtcGxlcy9hcHAtcm91dGVyJyxcbiAgICAgIGJ1aWxkQ29tbWFuZDogJ25weCBvcGVuLW5leHRAXjIgYnVpbGQnLFxuICAgICAgLy8gc2tpcEJ1aWxkOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgbmV3IENmbk91dHB1dCh0aGlzLCBcIkNsb3VkRnJvbnREaXN0cmlidXRpb25Eb21haW5cIiwge1xuICAgICAgdmFsdWU6IG5leHRqcy5kaXN0cmlidXRpb24uZGlzdHJpYnV0aW9uRG9tYWluLFxuICAgIH0pO1xuICB9XG59XG4iXX0=