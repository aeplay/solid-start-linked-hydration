// THIS WORKS

// import { GridSection, MiniStory } from "~/components/LocalComponents";

// THIS DOESN'T

import { GridSection, MiniStory } from "component-lib/src/LinkedComponents";

export default function Home() {
    return (
        <main>
            <GridSection>
                <MiniStory title="Story 1">
                    Description 1
                </MiniStory>
                <MiniStory title="Story 2">
                    Description 2 with <em>something emphasized</em> and more stuff.
                </MiniStory>
                <MiniStory title="Story 3">
                    Description 3
                </MiniStory>
                <MiniStory title="Story 4">
                    Description 4 with <em>something emphasized</em> and more stuff.
                </MiniStory>
                <MiniStory title="Story 5">
                    Description 5
                </MiniStory>
                <MiniStory title="Story 6">
                    Description 6
                </MiniStory>
            </GridSection>
        </main>
    );
}
