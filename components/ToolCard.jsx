export default function ToolCard({ tool }) {
  return (
    <article
      style={{
        border: '1px solid #e9eef8',
        borderRadius: 18,
        padding: 18,
        background: '#fff',
        boxShadow: '0 10px 24px rgba(15, 23, 36, 0.04)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 12 }}>
        <div>
          <p style={{ margin: 0, color: '#0b5fff', fontWeight: 700, fontSize: 13 }}>{tool.category}</p>
          <h3 style={{ margin: '8px 0', fontSize: 22 }}>{tool.title}</h3>
        </div>
        <span
          style={{
            borderRadius: 999,
            background: '#ecf4ff',
            color: '#0b5fff',
            padding: '4px 10px',
            fontSize: 12,
            fontWeight: 700
          }}
        >
          {tool.status}
        </span>
      </div>

      <p style={{ color: '#4b5970', lineHeight: 1.7, minHeight: 72 }}>{tool.short_desc}</p>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
        {tool.tags.map((tag) => (
          <span key={tag} style={{ background: '#f3f7ff', color: '#3d4e67', borderRadius: 999, padding: '4px 8px', fontSize: 12 }}>
            #{tag}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <a href={tool.url} target="_blank" rel="noreferrer" style={{ background: '#0b5fff', color: '#fff', textDecoration: 'none', borderRadius: 10, padding: '8px 12px', fontWeight: 700 }}>
          仓库
        </a>
        {tool.official_site && (
          <a href={tool.official_site} target="_blank" rel="noreferrer" style={{ background: '#eef3ff', color: '#18212f', textDecoration: 'none', borderRadius: 10, padding: '8px 12px', fontWeight: 700 }}>
            官网
          </a>
        )}
      </div>
    </article>
  );
}
