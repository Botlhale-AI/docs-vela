// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: "category",
      label: "🚀 Getting Started",
      collapsed: false,
      items: [
        "getting-started/platform-overview",
        "getting-started/system-requirements",
        {
          type: "category",
          label: "Quick Start Guides",
          collapsed: false,
          items: [
            "getting-started/quick-start/team-lead-quick-start",
            "getting-started/quick-start/agent-quick-start",  
            "getting-started/quick-start/administrator-setup",
          ],
        },
      ],
    },
    // {
    //   type: "category",
    //   label: "📖 User Guides",
    //   collapsed: true,
    //   items: [
    //     {
    //       type: "category",
    //       label: "Team Lead Complete Guide",
    //       items: [
    //         "user-guides/team-lead/dashboard-analytics",
    //         "user-guides/team-lead/interactions-management",
    //         "user-guides/team-lead/smart-detector",
    //         "user-guides/team-lead/agent-management",
    //         "user-guides/team-lead/reports-insights",
    //         "user-guides/team-lead/coaching-training",
    //         "user-guides/team-lead/settings-administration",
    //       ],
    //     },
    //     {
    //       type: "category",
    //       label: "Agent User Guide",
    //       items: [
    //         "user-guides/agent/personal-dashboard",
    //         "user-guides/agent/my-interactions",
    //         "user-guides/agent/training-portal",
    //         "user-guides/agent/awards-recognition",
    //       ],
    //     },
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "⚙️ Features",
    //   collapsed: true,
    //   items: [
    //     "features/ai-analysis-transcription",
    //     "features/quality-assurance-tools",
    //     "features/multi-language-support",
    //     "features/bulk-operations",
    //     "features/custom-reporting",
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "🔧 Advanced",
    //   collapsed: true,
    //   items: [
    //     "advanced/api-documentation",
    //     "advanced/system-integrations",
    //     "advanced/advanced-workflows",
    //     "advanced/best-practices",
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "🆘 Support",
    //   collapsed: true,
    //   items: [
    //     "support/troubleshooting-guide",
    //     "support/faq",
    //     "support/video-tutorials",
    //     "support/release-notes",
    //   ],
    // },
  ],
};

export default sidebars;
