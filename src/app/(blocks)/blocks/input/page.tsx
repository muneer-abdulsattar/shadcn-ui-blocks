import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";

const InputBlocks = () => (
  <div>
    <MainHeading>Input</MainHeading>
    <DescriptionText className="mt-1">
      Displays a form input field or a component that looks like an input field.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Default" type="input" name="default-input" />
      <Block title="Filled" type="input" name="filled-input" />
      <Block title="Disabled" type="input" name="disabled-input" />
      <Block title="With label" type="input" name="with-label" />
      <Block title="With button" type="input" name="with-button" />
      <Block title="With adornments" type="input" name="with-adornment" />
      <Block title="With helper text" type="input" name="with-helper-text" />
      <Block title="File input" type="input" name="file-input" />
      <Block title="Dropzone" type="input" name="dropzone" />
    </div>
  </div>
);

export default InputBlocks;
