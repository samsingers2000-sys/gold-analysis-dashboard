* {
  box-sizing: border-box;
}

:root {
  --bg: #f5f7fb;
  --panel: #ffffff;
  --panel-alt: #f9fafc;
  --sidebar: #111827;
  --sidebar-soft: #1f2937;
  --primary: #d4a63c;
  --primary-soft: #fdf4d8;
  --text: #111827;
  --muted: #6b7280;
  --line: #e5e7eb;
  --success: #16a34a;
  --success-soft: #dcfce7;
  --warning: #f59e0b;
  --warning-soft: #fef3c7;
  --danger: #ef4444;
  --danger-soft: #fee2e2;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Cairo", sans-serif;
  background: var(--bg);
  color: var(--text);
}

body {
  display: flex;
  justify-content: center;
  padding: 24px;
}

button {
  font: inherit;
  border: 0;
  cursor: pointer;
}

.app-shell {
  width: 100%;
  max-width: 1500px;
  min-height: 900px;
  display: grid;
  grid-template-columns: 260px 1fr;
  background: var(--bg);
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.08);
}

.sidebar {
  background: linear-gradient(180deg, var(--sidebar) 0%, #0f172a 100%);
  color: white;
  padding: 26px 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #f6c76d, #d4971b);
  color: #111827;
  font-weight: 800;
}

.brand h1 {
  font-size: 1.4rem;
  margin: 0;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  padding: 12px 14px;
  border-radius: 12px;
  background: transparent;
  color: rgba(255,255,255,0.78);
  text-align: right;
  transition: 0.2s ease;
}

.nav-item.active,
.nav-item:hover {
  background: rgba(255,255,255,0.08);
  color: #fff;
}

.sidebar-card {
  margin-top: 30px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 18px 16px;
}

.label {
  margin: 0 0 12px;
  color: rgba(255,255,255,0.7);
  font-size: 0.8rem;
}

.status-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.dot.green {
  background: #4ade80;
  box-shadow: 0 0 18px rgba(74, 222, 128, 0.8);
}

.sidebar-card small {
  color: rgba(255,255,255,0.68);
  line-height: 1.6;
}

.main-content {
  padding: 24px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 22px;
}

.eyebrow {
  margin: 0;
  color: var(--muted);
  font-size: 0.82rem;
}

.topbar h2 {
  margin: 4px 0 0;
  font-size: 2rem;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ghost-btn {
  background: var(--panel);
  border: 1px solid var(--line);
  padding: 10px 18px;
  border-radius: 12px;
  color: var(--text);
}

.ghost-btn.small {
  padding: 8px 12px;
  font-size: 0.82rem;
}

.user-box {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--panel);
  border: 1px solid var(--line);
  padding: 8px 12px;
  border-radius: 12px;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 700;
  background: linear-gradient(135deg, #f9d27d, #d59721);
  color: #151515;
}

.user-box strong,
.user-box small {
  display: block;
}

.user-box small {
  color: var(--muted);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 18px;
  margin-bottom: 22px;
}

.stat-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px 18px 16px;
}

.stat-card.primary {
  background: linear-gradient(135deg, #fff7e7, #fff);
  border-color: #f6d98e;
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 0.82rem;
}

.stat-card h3 {
  margin: 18px 0 8px;
  font-size: 2rem;
}

.stat-card small {
  color: var(--muted);
}

.pill {
  display: inline-flex;
  align-items: center;
  padding: 6px 9px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
}

.pill.positive {
  background: var(--success-soft);
  color: var(--success);
}

.pill.neutral {
  background: var(--warning-soft);
  color: #9a6500;
}

.content-grid,
.bottom-grid {
  display: grid;
  grid-template-columns: 1.6fr 0.9fr;
  gap: 20px;
  margin-bottom: 22px;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 18px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 16px;
}

.panel-header h3 {
  margin: 0;
  font-size: 1.2rem;
}

.range-picker {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--panel-alt);
  border: 1px solid var(--line);
  padding: 6px;
  border-radius: 12px;
}

.range {
  background: transparent;
  color: var(--muted);
  padding: 6px 10px;
  border-radius: 10px;
}

.range.active {
  background: var(--primary-soft);
  color: #8b6408;
}

.chart-wrap {
  width: 100%;
  height: 290px;
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(246,183,60,0.04), rgba(246,183,60,0.01));
  padding: 6px;
}

#trend-chart {
  width: 100%;
  height: 100%;
}

.grid-lines line {
  stroke: rgba(17, 24, 39, 0.08);
  stroke-width: 1;
}

.chart-line {
  fill: none;
  stroke: #d4a63c;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.chart-area {
  fill: url(#chartFill);
}

.alert-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.alert-list li {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 8px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--panel-alt);
}

.alert-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 62px;
  padding: 6px 8px;
  border-radius: 10px;
  font-size: 0.74rem;
  font-weight: 700;
}

.alert-tag.up {
  background: var(--success-soft);
  color: var(--success);
}

.alert-tag.down {
  background: var(--danger-soft);
  color: var(--danger);
}

.alert-tag.neutral {
  background: var(--warning-soft);
  color: #9a6500;
}

.alert-list strong {
  display: block;
}

.alert-list small {
  color: var(--muted);
}

.link-btn {
  background: transparent;
  color: var(--primary);
  font-weight: 600;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 14px 10px;
  border-bottom: 1px solid var(--line);
  text-align: right;
}

th {
  color: var(--muted);
  font-weight: 600;
  font-size: 0.82rem;
}

.up {
  color: var(--success);
  font-weight: 700;
}

.down {
  color: var(--danger);
  font-weight: 700;
}

.badge {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
}

.badge.success {
  background: var(--success-soft);
  color: var(--success);
}

.badge.warning {
  background: var(--warning-soft);
  color: #9a6500;
}

.insights {
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 14px;
}

.insight-item {
  background: var(--panel-alt);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 16px 14px;
}

.insight-item .label {
  display: block;
  color: var(--muted);
  margin-bottom: 8px;
}

.insight-item strong {
  font-size: 1.3rem;
}

@media (max-width: 1100px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    padding-bottom: 12px;
  }

  .nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .content-grid,
  .bottom-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
