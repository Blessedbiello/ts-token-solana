// import { TokenStandard, createFungible, createV1, mintV1, mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
// import { generateSigner, keypairIdentity, percentAmount } from "@metaplex-foundation/umi";
// import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
// import { userKeypair } from "./helpers";

// const umi = createUmi('https://api.devnet.solana.com');

// const keypair = umi.eddsa.createKeypairFromSecretKey(userKeypair.secretKey);

// umi.use(keypairIdentity(keypair))
//     .use(mplTokenMetadata())


//     const metadata = {
//         name: "Biello Prime",
//         symbol: "BPRIME",
//         uri: "https://raw.githubusercontent.com/solana-developers/program-examples/new-examples/tokens/tokens/.assets/spl-token.json",
//     };
    
//     const mint = generateSigner(umi);
//     async function createMetadataDetails() {
//         await createV1(umi, {
//             mint,
//             authority: umi.identity,
//             name: metadata.name,
//             symbol: metadata.symbol,
//             uri: metadata.uri,
//             sellerFeeBasisPoints: percentAmount(0),
//             decimals: 9,
//             tokenStandard: TokenStandard.Fungible,
//         }).sendAndConfirm(umi)
//         console.log(`Name: ${metadata.name}`);
    // }


    // async function mintToken() {
    //     await mintV1(umi, {
    //         mint: mint.publicKey,
    //         authority: umi.identity,
    //         amount: 177_000,
    //         tokenOwner: umi.identity.publicKey,
    //         tokenStandard: TokenStandard.Fungible,
    //     }).sendAndConfirm(umi)
    //     console.log(mintV1)
    // }

    // createFungible(umi, {
    //     mint,
    //     authority: umi.identity,
    //     name: metadata.name,
    //     symbol: metadata.symbol,
    //     uri: metadata.uri,
    //     sellerFeeBasisPoints: percentAmount(0),
    //     decimals: 9,
    // }).sendAndConfirm(umi);
    





    import { 
        mplTokenMetadata,
        TokenStandard,
        // mintV1,
        // createFungible,
        createAndMint,
     } from "@metaplex-foundation/mpl-token-metadata";
    import { 
        keypairIdentity,
        generateSigner, 
        percentAmount, 
    } from "@metaplex-foundation/umi";
    import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
    import { userKeypair } from "./helpers";
    
    const umi = createUmi('https://api.devnet.solana.com');
    
    const keypair = umi.eddsa.createKeypairFromSecretKey(userKeypair.secretKey);
    
    umi.use(keypairIdentity(keypair))
        .use(mplTokenMetadata())
    
    const metadata = {
        name: "Bprime Token (BPRIME)",
        symbol: "BPRT",
        uri: "https://javiermontescarrera.github.io/solana-demos/res/tokens/demo-spl-token.jso",
    };
    
    const mint = generateSigner(umi);
    
    // async function mintToken() {
    //     await mintV1(umi, {
    //         mint: mint.publicKey,
    //         authority: umi.identity,
    //         amount: 10_000,
    //         tokenOwner: umi.identity.publicKey,
    //         tokenStandard: TokenStandard.Fungible,
    //     }).sendAndConfirm(umi)
    // }
    
    console.log(mint);
    console.log("Mint publicKey: ", mint.publicKey); 
    
    // createFungible(umi, {
    //     mint,
    //     authority: umi.identity,
    //     name: metadata.name,
    //     symbol: metadata.symbol,
    //     uri: metadata.uri,
    //     sellerFeeBasisPoints: percentAmount(0),
    //     decimals: 0,
    // }).sendAndConfirm(umi).then(() => {
    //     mintToken().then(() => {
    //         console.log("10,000 PSOL (", mint.publicKey, ") minted");
    //     });
    // });
    
    let amount_to_mint:number = 90_000;
    
    createAndMint(umi, {
        mint,
        authority: umi.identity,
        name: metadata.name,
        symbol: metadata.symbol,
        uri: metadata.uri,
        sellerFeeBasisPoints: percentAmount(0),
        decimals: 9,
        amount: amount_to_mint,
        tokenOwner: umi.identity.publicKey,
        tokenStandard: TokenStandard.Fungible,
    }).sendAndConfirm(umi).then(() => {
        console.log("90,000 BPRT (", mint.publicKey, ") minted");
    });


