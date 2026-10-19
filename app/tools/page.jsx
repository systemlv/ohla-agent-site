import ToolCard from '../components/ToolCard';

const tools = require('../../data/tools.json').items;

const categories = ['All', ...new Set(tools.map((tool) => tool.category))];

export default function ToolsPage() {
  return (
    <main style={{ padding: '32px 20px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ marginBottom: 30 }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: 1, color: '#7c8aa5', fontSize: 12, fontWeight: 700 }}>
          CURATED TOOLS
        </p>
        <h1 style={{ fontSize: 40, margin: '8px 0 12px' }}>OhLa 工具目录</h1>
        <p style={{ color: '#5b6578', maxWidth: 760, lineHeight: 1.7 }}>
          AI 开发者精选工具入口，聚焦 MCP、Agent、工作流模板、AI 应用与本地推理工具。
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
        {categories.map((category) => (
          <button
            key={category}
            style={{
              border: '1px solid #dfe6f3',
              background: category === 'All' ? '#0b5fff' : '#fff',
              color: category === 'All' ? '#fff' : '#18212f',
              borderRadius: 999,
              padding: '8px 14px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </main>
  );
}
