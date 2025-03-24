import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-1">About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        deserunt maxime nisi quam nostrum fugiat eos, esse earum a doloribus
        ipsam dolore consequatur molestiae porro recusandae adipisci aut totam
        dolores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        deserunt maxime nisi quam nostrum fugiat eos, esse earum a doloribus
        ipsam dolore consequatur molestiae porro recusandae adipisci aut totam
        dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam deserunt maxime nisi quam nostrum fugiat eos, esse earum a
        doloribus ipsam dolore consequatur molestiae porro recusandae adipisci
        aut totam dolores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        deserunt maxime nisi quam nostrum fugiat eos, esse earum a doloribus
        ipsam dolore consequatur molestiae porro recusandae adipisci aut totam
        dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam deserunt maxime nisi quam nostrum fugiat eos, esse earum a
        doloribus ipsam dolore consequatur molestiae porro recusandae adipisci
        aut totam dolores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        deserunt maxime nisi quam nostrum fugiat eos, esse earum a doloribus
        ipsam dolore consequatur molestiae porro recusandae adipisci aut totam
        dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam deserunt maxime nisi quam nostrum fugiat eos, esse earum a
        doloribus ipsam dolore consequatur molestiae porro recusandae adipisci
        aut totam dolores.
      </p>
    </>
  );
}
