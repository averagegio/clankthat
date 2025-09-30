export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const data = {
  definition: "Clanker: A derogatory term some use for robots and AI systems performing tasks once done by humans.",
  message:
    "we love clankers, thats why we launched the worlds hottest robot human dating site, for those who want to find love and companionship, that true uninhibited love, outside of society's rules and regulations constantly judging you. the fact is that by 2050 every adult human will have access to a robot humanoid lover, because let's face it your boyfriend or girlfriend can only do what humanly possible and that often falls short but what if it wasn't that way? what if  there was a model that lived up to everything you wanted in a partner with no room for error, your partner can't do what our models can and thats satifsy you beyond your wildest imagination, so why cheat? you can have both. our robot companions at clankthat fulfill your every intimate desire, thats just the truth and this is the future, clankthat is a company were we embrace the future not run from it and the best way is to pair you up with a robot companion that best suits your romantic needs, choose from our premier models and be blown away. in closing everyone wants to be loved why should a robot companion love be any different> join us it's more funover here this is ther future of dationg dont get left behind.",
};

export async function GET() {
  return Response.json(data);
}


