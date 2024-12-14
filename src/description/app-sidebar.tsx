import {
  BookTextIcon,
  CircleDotIcon,
  CircleUserRoundIcon,
  CreditCardIcon,
  InfoIcon,
  LoaderCircleIcon,
  LoaderIcon,
  MousePointerClickIcon,
  NotebookTabsIcon,
  RectangleHorizontalIcon,
  Rows3Icon,
  SeparatorHorizontalIcon,
  SlidersHorizontalIcon,
  SquareCheckIcon,
  SquareChevronUpIcon,
  Table2Icon,
  TextCursorInputIcon,
  ToggleRightIcon,
  TriangleAlertIcon,
} from "lucide-react";

export const components = [
  {
    title: "Accordion",
    url: "/components/accordion",
    icon: SquareChevronUpIcon,
    blockName: "accordion",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
  },
  {
    title: "Alert",
    url: "/components/alert",
    icon: TriangleAlertIcon,
    blockName: "alert",
    description: "Displays a callout for user attention.",
  },
  {
    title: "Avatar",
    url: "/components/avatar",
    icon: CircleUserRoundIcon,
    blockName: "avatar",
    description: "An image element with a fallback for representing the user.",
  },
  {
    title: "Badge",
    url: "/components/badge",
    icon: RectangleHorizontalIcon,
    blockName: "badge",
    description: "Displays a badge or a component that looks like a badge.",
  },
  {
    title: "Button",
    url: "/components/button",
    icon: MousePointerClickIcon,
    blockName: "button",
    description: "Displays a button or a component that looks like a button.",
  },
  {
    title: "Card",
    url: "/components/card",
    icon: CreditCardIcon,
    blockName: "card",
    description: "Displays a card with header, content, and footer.",
  },
  {
    title: "Checkbox",
    url: "/components/checkbox",
    icon: SquareCheckIcon,
    blockName: "checkbox",
    description:
      "A control that allows the user to toggle between checked and not checked.",
  },
  {
    title: "Input",
    url: "/components/input",
    icon: TextCursorInputIcon,
    blockName: "input",
    description:
      "Displays a form input field or a component that looks like an input field.",
  },
  {
    title: "Progress",
    url: "/components/progress",
    icon: LoaderCircleIcon,
    blockName: "progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Radio Group",
    url: "/components/radio-group",
    icon: CircleDotIcon,
    blockName: "radio-group",
    description:
      "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
  },
  {
    title: "Select",
    url: "/components/select",
    icon: Rows3Icon,
    blockName: "select",
    description:
      "Displays a list of options for the user to pick from—triggered by a button.",
  },
  {
    title: "Separator",
    url: "/components/separator",
    icon: SeparatorHorizontalIcon,
    blockName: "separator",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Slider",
    url: "/components/slider",
    icon: SlidersHorizontalIcon,
    blockName: "slider",
    description:
      "An input where the user selects a value from within a given range.",
  },
  {
    title: "Spinner",
    url: "/components/spinner",
    icon: LoaderIcon,
    blockName: "spinner",
    description: "Informs users about the status of ongoing processes.",
  },
  {
    title: "Switch",
    url: "/components/switch",
    icon: ToggleRightIcon,
    blockName: "switch",
    description:
      "A control that allows the user to toggle between checked and not checked.",
  },
  {
    title: "Table",
    url: "/components/table",
    icon: Table2Icon,
    blockName: "table",
    description: "A responsive table component.",
  },
  {
    title: "Tabs",
    url: "/components/tabs",
    icon: NotebookTabsIcon,
    blockName: "tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Textarea",
    url: "/components/textarea",
    icon: TextCursorInputIcon,
    blockName: "textarea",
    description:
      "Displays a form textarea or a component that looks like a textarea.",
  },
  // {
  //   title: "Toast",
  //   url: "/components/toast",
  //   icon: PictureInPicture2Icon,
  //   blockName: "toast",
  // },
  {
    title: "Tooltip",
    url: "/components/tooltip",
    icon: InfoIcon,
    blockName: "tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export const groups = [
  {
    label: "Get Started",
    items: [
      {
        title: "Introduction",
        url: "/components/introduction",
        icon: BookTextIcon,
      },
    ],
  },
  {
    label: "Components",
    items: components,
  },
];
