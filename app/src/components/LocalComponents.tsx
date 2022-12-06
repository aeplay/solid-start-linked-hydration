import { JSX } from "solid-js";

export function MiniStory(props: {
    title: string;
    children: JSX.Element;
}) {
    return (
        <div class="col-span-4 row-span-2 grid grid-cols-4 grid-rows-2 gap-6">
            <h2 class="text-2xl font-display font-bold tracking-tight col-span-4 self-end">
                {props.title}
            </h2>
            <p class="col-span-4">{props.children}</p>
        </div>
    );
}

export function GridSection(props: { children: JSX.Element; class?: string }) {
    return (
        <section
            class={`grid justify-center grid-cols-[repeat(4,_4rem)] md:grid-cols-[repeat(8,_4rem)] lg:grid-cols-[repeat(12,_4rem)] auto-rows-[minmax(4rem,_auto)] md:auto-rows-[4rem] gap-6 mb-6 ${
                props.class || ""
            }`}
        >
            {props.children}
        </section>
    );
}
