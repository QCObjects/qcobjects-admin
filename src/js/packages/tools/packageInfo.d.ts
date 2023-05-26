declare const packageInfo: (pName: string) => {
    name: string;
    description: string;
    version: string;
    "repository.url": string;
};
export default packageInfo;
