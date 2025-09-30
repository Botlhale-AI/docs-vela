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
            "getting-started/quick-start/agent-quick-start-nested",  
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
    //         {
    //           type: "doc",
    //           id: "user-guides/team-lead/dashboard-analytics",
    //           label: "Dashboard & Analytics"
    //         },
    //         {
    //           type: "doc",
    //           id: "user-guides/team-lead/interactions-management",
    //           label: "Interactions Management"
    //         },
    //         {
    //           type: "doc",
    //           id: "user-guides/team-lead/smart-detector",
    //           label: "Smart Detector"
    //         },
    //         {
    //           type: "doc",
    //           id: "user-guides/team-lead/agent-management",
    //           label: "Agent Management"
    //         },
    //         {
    //           type: "doc",
    //           id: "user-guides/team-lead/reports-insights",
    //           label: "Reports & Insights"
    //         },
    //         {
    //           type: "doc",
    //           id: "user-guides/team-lead/coaching-training",
    //           label: "Coaching & Training"
    //         },
    //         {
    //           type: "doc",
    //           id: "user-guides/team-lead/settings-administration",
    //           label: "Settings & Administration"
    //         },
    //       ],
    //     },
    //     {
    //       type: "category",
    //       label: "Agent User Guide",
    //       items: [
    //         {
    //           type: "doc",
    //           id: "user-guides/agent/personal-dashboard",
    //           label: "Agent Dashboard"
    //         },
    //         {
    //           type: "doc",
    //           id: "user-guides/agent/my-interactions",
    //           label: "Agent Interactions"
    //         },
    //         {
    //           type: "doc",
    //           id: "user-guides/agent/training-portal",
    //           label: "Agent Coaching Portal"
    //         },
    //         {
    //           type: "doc",
    //           id: "user-guides/agent/awards-recognition",
    //           label: "Awards & Recognition"
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      type: "category",
      label: "⚙️ Features",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "features/ai-analysis-transcription",
          label: "Call Analysis"
        },
        {
          type: "doc",
          id: "features/quality-assurance-tools",
          label: "Quality Assurance"
        },
        {
          type: "doc",
          id: "features/monitor-agent-performance",
          label: "Monitor Agent Performance"
        },
        // {
        //   type: "doc",
        //   id: "features/multi-language-support",
        //   label: "Multi-Language Support"
        // },
        {
          type: "doc",
          id: "features/bulk-operations",
          label: "Bulk Operations"
        },
        {
          type: "doc",
          id: "features/custom-reporting",
          label: "Custom Reporting"
        },
      ],
    },
    {
      type: "category",
      label: "🔧 Advanced",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "advanced/api-documentation",
          label: "API Documentation"
        },
        // {
        //   type: "doc",
        //   id: "advanced/system-integrations",
        //   label: "System Integrations"
        // },
        // {
        //   type: "doc",
        //   id: "advanced/advanced-workflows",
        //   label: "Advanced Workflows"
        // },
        // {
        //   type: "doc",
        //   id: "advanced/best-practices",
        //   label: "Best Practices"
        // },
      ],
    },
    {
      type: "category",
      label: "🆘 Support",
      collapsed: true,
      items: [
        // {
        //   type: "doc",
        //   id: "support/troubleshooting-guide",
        //   label: "Troubleshooting Guide"
        // },
        {
          type: "doc",
          id: "support/faq",
          label: "Frequently Asked Questions"
        },
        {
          type: "doc",
          id: "support/video-tutorials",
          label: "Video Tutorials"
        },
        
      ],
    },
    {
      type: "category",
      label: "📚 Core Documentation",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "Agents",
          label: "Agents Management"
        },
        {
          type: "doc",
          id: "Calls",
          label: "Call Management"
        },
        {
          type: "doc",
          id: "Chats",
          label: "Chat Management"
        },
        {
          type: "doc",
          id: "Dashboard",
          label: "Dashboard Overview"
        },
        {
          type: "doc",
          id: "api",
          label: "API Reference"
        },
        {
          type: "doc",
          id: "Settings",
          label: "System Settings"
        },
        {
          type: "doc",
          id: "Reports",
          label: "Reports & Analytics"
        },
        {
          type: "doc",
          id: "Notifications",
          label: "Notifications"
        },
        {
          type: "doc",
          id: "data-upload",
          label: "Data Upload"
        },
        {
          type: "doc",
          id: "smart-detector-overview",
          label: "Smart Detector"
        },
        {
          type: "doc",
          id: "smart-search-guide",
          label: "Smart Search"
        },
        {
          type: "doc",
          id: "knowledge-base-guide",
          label: "Knowledge Base"
        },
        {
          type: "doc",
          id: "navigation-guide",
          label: "Navigation Guide"
        },
        {
          type: "doc",
          id: "agent-scorecard-guide",
          label: "Agent Scorecard"
        },
        {
          type: "doc",
          id: "compression_method",
          label: "Compression Methods"
        },
        {
          type: "doc",
          id: "faq",
          label: "FAQ"
        },
        {
          type: "doc",
          id: "release-notes",
          label: "Release Notes"
        },
      ],
    },
  ],
};

export default sidebars