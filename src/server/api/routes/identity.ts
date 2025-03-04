import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const identityRouter = createTRPCRouter({
    verifyUser: protectedProcedure.input(z.object({
        text: z.string(),
    })).query(async ({ ctx, input }) => {
        const user = ctx.auth.userId
        const organization = ctx.auth.orgSlug
        const organizationId = ctx.auth.orgId
        return {
            greeting: `You said ${input.text}, ${user} from ${organization} with id ${organizationId}`
        }
    })
})
