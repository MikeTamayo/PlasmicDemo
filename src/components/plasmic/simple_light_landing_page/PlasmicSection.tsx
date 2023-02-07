// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2raDFPVZyxhajMgTww3PMj
// Component: vYp9wYEISqZH25
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: 2raDFPVZyxhajMgTww3PMj/projectcss
import sty from "./PlasmicSection.module.css"; // plasmic-import: vYp9wYEISqZH25/css

export type PlasmicSection__VariantMembers = {
  color: "halfDark" | "dark";
  hasTitle: "hasTitle";
  hasSubtitle: "hasSubtitle";
};
export type PlasmicSection__VariantsArgs = {
  color?: SingleChoiceArg<"halfDark" | "dark">;
  hasTitle?: SingleBooleanChoiceArg<"hasTitle">;
  hasSubtitle?: SingleBooleanChoiceArg<"hasSubtitle">;
};
type VariantPropType = keyof PlasmicSection__VariantsArgs;
export const PlasmicSection__VariantProps = new Array<VariantPropType>(
  "color",
  "hasTitle",
  "hasSubtitle"
);

export type PlasmicSection__ArgsType = {
  children?: React.ReactNode;
  subtitle?: React.ReactNode;
  title?: React.ReactNode;
};
type ArgPropType = keyof PlasmicSection__ArgsType;
export const PlasmicSection__ArgProps = new Array<ArgPropType>(
  "children",
  "subtitle",
  "title"
);

export type PlasmicSection__OverridesType = {
  root?: p.Flex<"div">;
  content?: p.Flex<"div">;
  titleContainer?: p.Flex<"div">;
  subtitleContainer?: p.Flex<"div">;
  contentContainer?: p.Flex<"div">;
};

export interface DefaultSectionProps {
  children?: React.ReactNode;
  subtitle?: React.ReactNode;
  title?: React.ReactNode;
  color?: SingleChoiceArg<"halfDark" | "dark">;
  hasTitle?: SingleBooleanChoiceArg<"hasTitle">;
  hasSubtitle?: SingleBooleanChoiceArg<"hasSubtitle">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicSection__RenderFunc(props: {
  variants: PlasmicSection__VariantsArgs;
  args: PlasmicSection__ArgsType;
  overrides: PlasmicSection__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.color : undefined
      },
      {
        path: "hasTitle",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.hasTitle : undefined
      },
      {
        path: "hasSubtitle",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ($props, $state, $ctx) => $props.hasSubtitle
          : undefined
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootcolor_dark]: hasVariant($state, "color", "dark"),
          [sty.rootcolor_halfDark]: hasVariant($state, "color", "halfDark"),
          [sty.roothasSubtitle]: hasVariant(
            $state,
            "hasSubtitle",
            "hasSubtitle"
          )
        }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"content"}
        data-plasmic-override={overrides.content}
        hasGap={true}
        className={classNames(projectcss.all, sty.content, {
          [sty.contentcolor_halfDark]: hasVariant($state, "color", "halfDark"),
          [sty.contenthasSubtitle]: hasVariant(
            $state,
            "hasSubtitle",
            "hasSubtitle"
          ),
          [sty.contenthasTitle]: hasVariant($state, "hasTitle", "hasTitle")
        })}
      >
        {(hasVariant($state, "hasTitle", "hasTitle") ? true : true) ? (
          <div
            data-plasmic-name={"titleContainer"}
            data-plasmic-override={overrides.titleContainer}
            className={classNames(projectcss.all, sty.titleContainer, {
              [sty.titleContainerhasTitle]: hasVariant(
                $state,
                "hasTitle",
                "hasTitle"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Title",
              value: args.title,
              className: classNames(sty.slotTargetTitle)
            })}
          </div>
        ) : null}
        {(hasVariant($state, "hasSubtitle", "hasSubtitle") ? true : true) ? (
          <div
            data-plasmic-name={"subtitleContainer"}
            data-plasmic-override={overrides.subtitleContainer}
            className={classNames(projectcss.all, sty.subtitleContainer, {
              [sty.subtitleContainerhasSubtitle]: hasVariant(
                $state,
                "hasSubtitle",
                "hasSubtitle"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Subtitle",
              value: args.subtitle,
              className: classNames(sty.slotTargetSubtitle)
            })}
          </div>
        ) : null}

        <div
          data-plasmic-name={"contentContainer"}
          data-plasmic-override={overrides.contentContainer}
          className={classNames(projectcss.all, sty.contentContainer, {
            [sty.contentContainerhasSubtitle]: hasVariant(
              $state,
              "hasSubtitle",
              "hasSubtitle"
            ),
            [sty.contentContainerhasSubtitle_hasTitle]:
              hasVariant($state, "hasTitle", "hasTitle") &&
              hasVariant($state, "hasSubtitle", "hasSubtitle"),
            [sty.contentContainerhasTitle]: hasVariant(
              $state,
              "hasTitle",
              "hasTitle"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: null,
            value: args.children
          })}
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "content",
    "titleContainer",
    "subtitleContainer",
    "contentContainer"
  ],
  content: [
    "content",
    "titleContainer",
    "subtitleContainer",
    "contentContainer"
  ],
  titleContainer: ["titleContainer"],
  subtitleContainer: ["subtitleContainer"],
  contentContainer: ["contentContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  content: "div";
  titleContainer: "div";
  subtitleContainer: "div";
  contentContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSection__VariantsArgs;
    args?: PlasmicSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSection__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSection__ArgProps,
          internalVariantPropNames: PlasmicSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSection";
  } else {
    func.displayName = `PlasmicSection.${nodeName}`;
  }
  return func;
}

export const PlasmicSection = Object.assign(
  // Top-level PlasmicSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    content: makeNodeComponent("content"),
    titleContainer: makeNodeComponent("titleContainer"),
    subtitleContainer: makeNodeComponent("subtitleContainer"),
    contentContainer: makeNodeComponent("contentContainer"),

    // Metadata about props expected for PlasmicSection
    internalVariantProps: PlasmicSection__VariantProps,
    internalArgProps: PlasmicSection__ArgProps
  }
);

export default PlasmicSection;
/* prettier-ignore-end */
