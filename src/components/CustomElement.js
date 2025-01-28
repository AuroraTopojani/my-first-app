export default function CustomElement({ children, Tag, ...props }) {
  return (
    <>
      <Tag {...props}>{children}</Tag>
    </>
  );
}
