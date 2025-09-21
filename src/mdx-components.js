import { useMDXComponents as getThemeComponents } from "nextra-theme-docs"

const themeComponents = getThemeComponents()

const Table = ({ children, ...props }) => {
  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          minWidth: "100%",
          tableLayout: "auto",
          borderCollapse: "collapse"
        }}
        {...props}
      >
        {children}
      </table>
    </div>
  )
}

export function useMDXComponents(components) {
  return {
    ...themeComponents,
    table: Table,
    ...components
  }
}
