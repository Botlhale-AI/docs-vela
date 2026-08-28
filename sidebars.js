// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: "category",
      label: "🚀 Getting Started",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Getting Started",
        description:
          "Get to know Vela and set it up. Start with the overview, check the requirements, then follow the quick start for your role.",
        slug: "/getting-started",
      },
      items: [
        {
          type: "doc",
          id: "getting-started/platform-overview",
          label: "👋 Platform Overview",
        },
        {
          type: "doc",
          id: "getting-started/system-requirements",
          label: "🖥️ System Requirements",
        },
        {
          type: "category",
          label: "🏁 Quick Start Guides",
          collapsed: true,
          link: {
            type: "generated-index",
            title: "Quick Start Guides",
            description:
              "Choose the guide that matches your role. Administrators set Vela up before anyone else can use it. Team leads and QA managers then review interactions, coach agents, and monitor performance.",
            slug: "/quick-start-guides",
          },
          items: [
            {
              type: "doc",
              id: "getting-started/quick-start/administrator-setup",
              label: "🛠️ Administrator Setup",
            },
            {
              type: "doc",
              id: "getting-started/quick-start/team-lead-quick-start",
              label: "👤 Team Lead Quick Start",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "📥 Getting Data In",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Getting Data In",
        description:
          "How to bring your calls and chats into Vela.",
        slug: "/getting-data-in",
      },
      items: [
        {
          type: "doc",
          id: "data-upload",
          label: "⬆️ Upload Your Data"
        },
      ],
    },
    {
      type: "category",
      label: "📊 Using Vela",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Using Vela",
        description:
          "The day-to-day work: reviewing interactions, monitoring agent performance, generating reports, staying on top of alerts, and keeping agent and team records right.",
        slug: "/using-vela",
      },
      items: [
        {
          type: "doc",
          id: "features/quality-assurance-tools",
          label: "✅ Review and Score Interactions"
        },
        {
          type: "doc",
          id: "features/monitor-agent-performance",
          label: "📈 Monitor Agent Performance"
        },
        {
          type: "doc",
          id: "features/custom-reporting",
          label: "🧾 Generate Reports"
        },
        {
          type: "doc",
          id: "features/notifications",
          label: "🔔 Manage Notifications"
        },
        {
          type: "doc",
          id: "features/manage-agents-and-teams",
          label: "🧑‍💼 Manage Agents and Teams"
        },
      ],
    },
    {
      type: "category",
      label: "🔍 Smart Detector",
      collapsed: true,
      // `smart-detector-overview` is deliberately absent from this list. The
      // category's generated-index below already introduces the section, so a
      // second overview inside it would duplicate that. The page stays
      // published as a link target: Smart Search and Smart Questions both
      // point at it for "the home page these tools sit under". Do not add it.
      link: {
        type: "generated-index",
        title: "Smart Detector",
        description:
          "Automate your monitoring. Flag interactions as they arrive, ask questions across them, and give the AI your own documents to judge against.",
        slug: "/smart-detector",
      },
      items: [
        {
          type: "doc",
          id: "agent-scorecard-guide",
          label: "📋 Build an Agent Scorecard"
        },
        {
          type: "doc",
          id: "smart-search-guide",
          label: "🚨 Set Up Smart Search"
        },
        {
          type: "doc",
          id: "smart-questions-guide",
          label: "❓ Set Up Smart Questions"
        },
        {
          type: "doc",
          id: "knowledge-base-guide",
          label: "📚 Build Your Knowledge Base"
        },
        {
          type: "doc",
          id: "topics-and-terms-guide",
          label: "🏷️ Manage Smart Search Terms"
        },
        {
          type: "doc",
          id: "number-search-guide",
          label: "📞 Search by Phone Number"
        },
      ],
    },
    {
      type: "category",
      label: "💡 Understanding Vela",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Understanding Vela",
        description:
          "How Vela works beneath the surface, starting with how it scores interactions.",
        slug: "/understanding-vela",
      },
      items: [
        {
          type: "doc",
          id: "explanation/how-scoring-works",
          label: "🎯 How Scoring Works"
        },
        {
          type: "doc",
          id: "explanation/how-the-pieces-fit",
          label: "🧩 How the Pieces Fit Together"
        },
      ],
    },
    {
      type: "category",
      label: "📖 Reference",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Reference",
        description:
          "Look up the details: definitions, metrics, scorecard fields, and Smart Search criteria.",
        slug: "/reference",
      },
      items: [
        {
          type: "doc",
          id: "reference/glossary",
          label: "🔤 Glossary"
        },
        {
          type: "doc",
          id: "reference/metrics",
          label: "📐 Metrics"
        },
        {
          type: "doc",
          id: "reference/scorecard-fields",
          label: "📋 Scorecard Fields"
        },
        {
          type: "doc",
          id: "reference/smart-search-criteria",
          label: "🔎 Smart Search Criteria"
        },
      ],
    },
    {
      type: "category",
      label: "⚙️ Administration & Configuration",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Administration & Configuration",
        description:
          "Configure Vela and keep it running: access, accounts, organisation settings, users and teams, and data privacy.",
        slug: "/administration",
      },
      items: [
        {
          type: "doc",
          id: "settings-config/access-control",
          label: "🔑 Roles and Access Levels"
        },
        {
          type: "doc",
          id: "settings-config/account-security",
          label: "🔒 Account and Security"
        },
        {
          type: "doc",
          id: "settings-config/organisation-configuration",
          label: "🏢 Organisation Configuration"
        },
        {
          type: "doc",
          id: "settings-config/user-management",
          label: "👥 User and Team Management"
        },
        {
          type: "doc",
          id: "settings-config/access-requests-audits",
          label: "🗂️ Access Requests"
        },
        {
          type: "doc",
          id: "security-compliance",
          label: "🔐 Security and Compliance"
        }
      ],
    },
    {
      type: "category",
      label: "🔧 Advanced",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Advanced",
        description:
          "For deeper configuration: the API and best practices drawn from real workflows.",
        slug: "/advanced",
      },
      items: [
        {
          type: "doc",
          id: "advanced/api-documentation",
          label: "🔌 API Reference"
        },
        {
          type: "doc",
          id: "advanced/best-practices",
          label: "⭐ Best Practices"
        },
      ],
    },
    {
      type: "category",
      label: "🆘 Support",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Support",
        description:
          "Get unstuck: troubleshooting, answers to common questions, and video walkthroughs.",
        slug: "/support",
      },
      items: [
        {
          type: "doc",
          id: "support/troubleshooting-guide",
          label: "🩺 Troubleshooting Guide"
        },
        {
          type: "doc",
          id: "support/faq",
          label: "💬 Frequently Asked Questions"
        },
        {
          type: "doc",
          id: "support/video-tutorials",
          label: "🎥 Video Tutorials"
        },
      ],
    },
    // Explore Features: lean overviews of each product area, kept out of the
    // main nav for now. Uncomment to surface them. Titles and emoji match the
    // rewritten (draft) pages.
    // {
    //   type: "category",
    //   label: "🧭 Explore Features",
    //   collapsed: true,
    //   items: [
    //     { type: "doc", id: "Dashboard", label: "📊 Dashboard" },
    //     { type: "doc", id: "Calls", label: "📞 Calls" },
    //     { type: "doc", id: "Chats", label: "💬 Chats" },
    //     { type: "doc", id: "Agents", label: "🎧 Agents" },
    //     { type: "doc", id: "Reports", label: "🧾 Reports" },
    //     { type: "doc", id: "Notifications", label: "🔔 Notifications" },
    //     { type: "doc", id: "Coaching", label: "📚 Coaching" },
    //     { type: "doc", id: "smart-detector-overview", label: "🔍 Smart Detector" },
    //     { type: "doc", id: "Settings", label: "⚙️ Settings" },
    //     { type: "doc", id: "api", label: "🔌 API" },
    //   ],
    // },
  ],
};

export default sidebars
