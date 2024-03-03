
declare namespace NodeJS {
    export interface ProcessEnv {
        readonly NODE_ENV: string;
        readonly NEXT_NODE_ENV: string;
        
        readonly HUGGING_FACE_TRANSLATE_ACCESS_TOKEN: string;

        //  If you want to create key accessible in client components, starts with NEXT_
        //  readonly NEXT_THIS_IS_CLIENT_SIDE_ACCISSIBLE_KEY: string;
    }
}