import {z} from 'zod';

const schema = z.object({
    firstName: z.string().min(3).nullish(),
    lastName: z.string().min(3).nullish(),
    email: z.string().min(3).max(50).nullish(),
    isAdmin: z.boolean().default(false).nullish(),
    volunteerDate: z.string().nullish(),
    active: z.boolean().default(true).nullish(),
    lastDeployment: z.string().nullish()

    
});

export default schema;