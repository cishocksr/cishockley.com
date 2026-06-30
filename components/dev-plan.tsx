'use client';

import { useState } from 'react';

const phases = [
  {
    id: 1,
    name: 'FOUNDATION',
    subtitle: 'Master the Bedrock',
    days: 'Days 1–7',
    color: '#00E5FF',
    accent: '#003344',
    description: 'Lock in Java fundamentals so hard they become muscle memory.',
    focus: [
      'OOP Deep Dive',
      'Data Structures',
      'Recursion',
      'Complexity (Big O)',
    ],
    dailyGoal: '1 concept studied + 3 LeetCode Easy problems',
    plan: [
      {
        day: 1,
        title: 'Java OOP Mastery',
        tasks: [
          'Revisit classes, interfaces, abstract classes',
          'Implement a mini Zoo system using inheritance + polymorphism',
          'LeetCode: Two Sum, Reverse String, FizzBuzz',
        ],
      },
      {
        day: 2,
        title: 'Arrays & Strings',
        tasks: [
          'Study contiguous memory, in-place operations',
          'Implement your own dynamic array from scratch',
          'LeetCode: Best Time to Buy/Sell Stock, Valid Anagram, Longest Common Prefix',
        ],
      },
      {
        day: 3,
        title: 'HashMaps & Sets',
        tasks: [
          'Understand hashing, collision resolution',
          'Build a frequency counter utility class',
          'LeetCode: Contains Duplicate, Two Sum (HashMap approach), Group Anagrams',
        ],
      },
      {
        day: 4,
        title: 'Recursion & The Call Stack',
        tasks: [
          'Draw recursion trees by hand for 3 problems',
          'Implement factorial, fibonacci, power(x,n)',
          'LeetCode: Climbing Stairs, Merge Two Sorted Lists, Reverse Linked List',
        ],
      },
      {
        day: 5,
        title: 'Stacks & Queues',
        tasks: [
          'Implement Stack and Queue using arrays and linked lists',
          'Understand when to use each',
          'LeetCode: Valid Parentheses, Min Stack, Implement Queue using Stacks',
        ],
      },
      {
        day: 6,
        title: 'Big O Notation',
        tasks: [
          "Analyze time/space complexity of your week's solutions",
          'Rewrite 2 solutions to improve complexity',
          'LeetCode: Running Sum of 1D Array, Richest Customer Wealth, Shuffle the Array',
        ],
      },
      {
        day: 7,
        title: 'Week 1 Review + Mini Project',
        tasks: [
          'Rebuild a HashMap from scratch using arrays',
          'Document everything you learned this week in a blog-style note',
          'Solve 5 mixed Easy problems — timed (20 min each)',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'PATTERNS',
    subtitle: 'Think in Templates',
    days: 'Days 8–14',
    color: '#B388FF',
    accent: '#1A0033',
    description:
      'Learn the patterns that unlock 80% of all coding interview problems.',
    focus: [
      'Two Pointers',
      'Sliding Window',
      'Binary Search',
      'Design Patterns',
    ],
    dailyGoal: '1 pattern studied + 3 LeetCode Easy/Medium problems',
    plan: [
      {
        day: 8,
        title: 'Two Pointers',
        tasks: [
          'Learn the template: left/right pointer convergence',
          'Implement pair sum, palindrome check, remove duplicates',
          'LeetCode: Valid Palindrome, 3Sum, Container With Most Water',
        ],
      },
      {
        day: 9,
        title: 'Sliding Window',
        tasks: [
          'Understand fixed vs variable window',
          'Implement max subarray, longest unique substring',
          'LeetCode: Maximum Average Subarray, Longest Substring Without Repeating Characters, Minimum Size Subarray Sum',
        ],
      },
      {
        day: 10,
        title: 'Binary Search',
        tasks: [
          'Learn the 3 templates (exact match, left bound, right bound)',
          'Apply to rotated arrays and condition-based search',
          'LeetCode: Binary Search, First Bad Version, Search in Rotated Sorted Array',
        ],
      },
      {
        day: 11,
        title: 'Linked Lists',
        tasks: [
          'Implement singly + doubly linked list with all operations',
          "Study Floyd's cycle detection algorithm",
          'LeetCode: Linked List Cycle, Middle of Linked List, Merge Two Sorted Lists',
        ],
      },
      {
        day: 12,
        title: 'Trees & BFS/DFS Intro',
        tasks: [
          'Build a BST from scratch: insert, search, delete',
          'Implement iterative BFS (queue) and DFS (stack/recursion)',
          'LeetCode: Max Depth of Binary Tree, Invert Binary Tree, Symmetric Tree',
        ],
      },
      {
        day: 13,
        title: 'Java Design Patterns I',
        tasks: [
          'Study and implement Builder, Factory, Singleton',
          'Refactor your VetConnect code to use one of these patterns',
          'LeetCode: 3 problems using any pattern you choose',
        ],
      },
      {
        day: 14,
        title: 'Week 2 Review + Pattern Drill',
        tasks: [
          'Solve 2 problems from each pattern learned (10 total)',
          'Write a cheat sheet for each pattern with template code',
          'Time yourself: aim for <25 min per Medium problem',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'DEPTH',
    subtitle: "Go Where Most Won't",
    days: 'Days 15–21',
    color: '#69FF47',
    accent: '#001A00',
    description:
      'Advanced concepts that separate good developers from great ones.',
    focus: ['Graphs', 'Dynamic Programming', 'Concurrency', 'Functional Java'],
    dailyGoal:
      '1 hard concept + 2 Medium/Hard LeetCode + 1 VetConnect improvement',
    plan: [
      {
        day: 15,
        title: 'Graphs: BFS & DFS',
        tasks: [
          'Implement graph using adjacency list + matrix',
          'BFS for shortest path, DFS for connected components',
          'LeetCode: Number of Islands, Clone Graph, Course Schedule',
        ],
      },
      {
        day: 16,
        title: 'Graphs: Advanced',
        tasks: [
          "Study Dijkstra's algorithm (shortest weighted path)",
          'Implement topological sort',
          'LeetCode: Network Delay Time, Find if Path Exists in Graph',
        ],
      },
      {
        day: 17,
        title: 'Dynamic Programming I',
        tasks: [
          'Understand the DP mindset: overlapping subproblems + optimal substructure',
          'Top-down (memoization) vs bottom-up (tabulation)',
          'LeetCode: Climbing Stairs, House Robber, Coin Change',
        ],
      },
      {
        day: 18,
        title: 'Dynamic Programming II',
        tasks: [
          '2D DP: grids and string problems',
          'LeetCode: Unique Paths, Longest Common Subsequence, Edit Distance',
          'Diagram at least one DP table by hand',
        ],
      },
      {
        day: 19,
        title: 'Java Streams & Lambdas',
        tasks: [
          'Master filter, map, reduce, collect, flatMap',
          'Rewrite 3 of your imperative Java solutions using Streams',
          'LeetCode: 3 problems — solve each imperatively AND with streams',
        ],
      },
      {
        day: 20,
        title: 'Java Concurrency Basics',
        tasks: [
          'Threads, Runnable, ExecutorService, synchronized',
          'Understand race conditions and how to prevent them',
          'Build a simple thread-safe counter + producer-consumer simulation',
        ],
      },
      {
        day: 21,
        title: 'Week 3 Review + VetConnect Sprint',
        tasks: [
          'Apply Streams + one design pattern to VetConnect backend',
          'Solve 3 DP problems untimed, then 2 timed',
          'Write a technical blog post on your biggest week 3 insight',
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'ENGINEER',
    subtitle: 'Build Like a Pro',
    days: 'Days 22–30',
    color: '#FFD740',
    accent: '#1A1000',
    description: 'Think beyond code — systems, craft, and career acceleration.',
    focus: ['System Design', 'Clean Code', 'Testing', 'Open Source'],
    dailyGoal:
      '1 system concept + 1 Medium/Hard LeetCode + real-world application',
    plan: [
      {
        day: 22,
        title: 'System Design Foundations',
        tasks: [
          'Study: scalability, load balancing, caching, databases',
          'Design a URL shortener on paper (Tiny URL)',
          'Read: Grokking System Design — first 3 chapters',
        ],
      },
      {
        day: 23,
        title: 'REST API Design Mastery',
        tasks: [
          'Study REST principles: resources, HTTP verbs, status codes, versioning',
          'Audit your VetConnect API for REST compliance',
          'Design a new endpoint from scratch: spec → implementation → test',
        ],
      },
      {
        day: 24,
        title: 'Testing as a Discipline',
        tasks: [
          'Study: unit vs integration vs e2e tests, TDD philosophy',
          'Achieve 80% test coverage on one VetConnect service class',
          'LeetCode: 2 problems — write tests for your solutions',
        ],
      },
      {
        day: 25,
        title: 'Clean Code & Refactoring',
        tasks: [
          'Read Clean Code Ch. 1-3 (or summary)',
          'Refactor your messiest VetConnect class: naming, SRP, extracting methods',
          'LeetCode: Solve 3 problems — then refactor each for readability',
        ],
      },
      {
        day: 26,
        title: 'Open Source Contribution',
        tasks: [
          'Find a good first issue in a Java/Spring Boot repo on GitHub',
          'Study the codebase, read the contribution guide',
          'Submit a PR or write a detailed plan for your contribution',
        ],
      },
      {
        day: 27,
        title: 'Heaps & Priority Queues',
        tasks: [
          'Understand min-heap vs max-heap, PriorityQueue in Java',
          'LeetCode: Kth Largest Element, Top K Frequent Elements, Merge K Sorted Lists',
          'Trace heap operations by hand',
        ],
      },
      {
        day: 28,
        title: 'Tries & Advanced Strings',
        tasks: [
          'Build a Trie from scratch in Java',
          'Understand prefix search and autocomplete use cases',
          'LeetCode: Implement Trie, Word Search II, Design Add and Search Words',
        ],
      },
      {
        day: 29,
        title: 'Mock Interview Day',
        tasks: [
          'Set a 1-hour timer. No hints allowed.',
          'Solve: 1 Medium DP + 1 Medium Graph + 1 Hard of your choice',
          'Record yourself explaining your solution out loud',
        ],
      },
      {
        day: 30,
        title: 'Reflection & Road Forward',
        tasks: [
          'Document: what you know now vs Day 1',
          'Create your next 30-day plan (or pick a specialization)',
          "Commit a meaningful feature to VetConnect using everything you've learned",
        ],
      },
    ],
  },
];

const dailyRoutine = [
  {
    time: 'Morning (30 min)',
    activity:
      "Warm-up problem — one Easy you've seen before. Build confidence, not frustration.",
  },
  {
    time: 'Deep Work (90 min)',
    activity: "The day's main concept. Study, diagram, implement from scratch.",
  },
  {
    time: 'Problem Block (60 min)',
    activity:
      "Solve that day's assigned LeetCode problems. No peeking for 20 min first.",
  },
  {
    time: 'Evening (20 min)',
    activity:
      'Write 3 sentences: what you learned, where you struggled, what to review.',
  },
];

export default function DevPlan() {
  const [activePhase, setActivePhase] = useState(0);
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('plan');

  const phase = phases[activePhase];

  return (
    <div
      style={{
        background: '#0A0A0F',
        minHeight: '100vh',
        fontFamily: "'Courier New', monospace",
        color: '#E0E0E0',
        padding: '0',
        overflowX: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: `2px solid ${phases[activePhase].color}20`,
          padding: '32px 24px 20px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(ellipse at top left, ${phases[activePhase].color}08 0%, transparent 60%)`,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            fontSize: '11px',
            letterSpacing: '4px',
            color: phases[activePhase].color,
            marginBottom: '8px',
          }}
        >
          SHOCK'S 30-DAY ENGINEERING PROGRAM
        </div>
        <h1
          style={{
            fontSize: '28px',
            fontWeight: '900',
            margin: 0,
            letterSpacing: '-1px',
            lineHeight: 1.1,
          }}
        >
          1% BETTER
          <br />
          <span style={{ color: phases[activePhase].color }}>EVERY DAY.</span>
        </h1>
        <p
          style={{
            fontSize: '12px',
            color: '#666',
            marginTop: '12px',
            letterSpacing: '1px',
          }}
        >
          JAVA · ALGORITHMS · SYSTEMS · CRAFT
        </p>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          borderBottom: '1px solid #1A1A2A',
          padding: '0 24px',
        }}
      >
        {['plan', 'routine', 'resources'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '14px 16px 12px',
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: activeTab === tab ? phase.color : '#444',
              borderBottom:
                activeTab === tab
                  ? `2px solid ${phase.color}`
                  : '2px solid transparent',
              marginBottom: '-1px',
              transition: 'color 0.2s',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'plan' && (
        <div style={{ padding: '24px' }}>
          {/* Phase Selector */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
              marginBottom: '24px',
            }}
          >
            {phases.map((p, i) => (
              <button
                key={p.id}
                onClick={() => {
                  setActivePhase(i);
                  setExpandedDay(null);
                }}
                style={{
                  background: activePhase === i ? `${p.color}15` : '#111118',
                  border: `1px solid ${activePhase === i ? p.color : '#222'}`,
                  borderRadius: '6px',
                  padding: '12px 8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    fontSize: '9px',
                    letterSpacing: '2px',
                    color: p.color,
                    marginBottom: '4px',
                  }}
                >
                  {p.days}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: activePhase === i ? '#FFF' : '#888',
                    letterSpacing: '1px',
                  }}
                >
                  {p.name}
                </div>
              </button>
            ))}
          </div>

          {/* Phase Header */}
          <div
            style={{
              background: `linear-gradient(135deg, ${phase.color}12, ${phase.color}04)`,
              border: `1px solid ${phase.color}30`,
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '10px',
                    letterSpacing: '3px',
                    color: phase.color,
                    marginBottom: '4px',
                  }}
                >
                  PHASE {phase.id} · {phase.days}
                </div>
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: '900',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {phase.name}
                </div>
                <div
                  style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}
                >
                  {phase.subtitle}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div
                  style={{
                    fontSize: '9px',
                    color: '#555',
                    letterSpacing: '1px',
                    marginBottom: '4px',
                  }}
                >
                  DAILY GOAL
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: '#AAA',
                    maxWidth: '200px',
                    textAlign: 'right',
                  }}
                >
                  {phase.dailyGoal}
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: '12px',
                color: '#AAA',
                marginTop: '12px',
                marginBottom: '12px',
                lineHeight: 1.6,
              }}
            >
              {phase.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {phase.focus.map((f) => (
                <span
                  key={f}
                  style={{
                    background: `${phase.color}20`,
                    color: phase.color,
                    padding: '3px 10px',
                    borderRadius: '20px',
                    fontSize: '10px',
                    letterSpacing: '1px',
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Day Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {phase.plan.map((d) => (
              <div key={d.day}>
                <button
                  onClick={() =>
                    setExpandedDay(expandedDay === d.day ? null : d.day)
                  }
                  style={{
                    width: '100%',
                    background:
                      expandedDay === d.day ? `${phase.color}10` : '#111118',
                    border: `1px solid ${expandedDay === d.day ? `${phase.color}50` : '#1E1E2A'}`,
                    borderRadius: '6px',
                    padding: '14px 16px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.15s',
                    textAlign: 'left',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: '700',
                        color: phase.color,
                        letterSpacing: '1px',
                        minWidth: '44px',
                      }}
                    >
                      DAY {d.day}
                    </span>
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        color: expandedDay === d.day ? '#FFF' : '#CCC',
                      }}
                    >
                      {d.title}
                    </span>
                  </div>
                  <span
                    style={{
                      color: '#444',
                      fontSize: '16px',
                      transform:
                        expandedDay === d.day ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.2s',
                    }}
                  >
                    +
                  </span>
                </button>
                {expandedDay === d.day && (
                  <div
                    style={{
                      background: '#0D0D14',
                      border: `1px solid ${phase.color}20`,
                      borderTop: 'none',
                      borderRadius: '0 0 6px 6px',
                      padding: '16px 16px 16px 74px',
                    }}
                  >
                    {d.tasks.map((task, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          gap: '10px',
                          marginBottom: '10px',
                          alignItems: 'flex-start',
                        }}
                      >
                        <span
                          style={{
                            color: phase.color,
                            fontSize: '12px',
                            marginTop: '2px',
                            flexShrink: 0,
                          }}
                        >
                          →
                        </span>
                        <span
                          style={{
                            fontSize: '12px',
                            color: '#BBB',
                            lineHeight: 1.5,
                          }}
                        >
                          {task}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'routine' && (
        <div style={{ padding: '24px' }}>
          <div style={{ marginBottom: '24px' }}>
            <div
              style={{
                fontSize: '10px',
                letterSpacing: '3px',
                color: phase.color,
                marginBottom: '8px',
              }}
            >
              DAILY STRUCTURE
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: '900', margin: 0 }}>
              The Daily Protocol
            </h2>
            <p
              style={{
                color: '#666',
                fontSize: '12px',
                marginTop: '6px',
                lineHeight: 1.6,
              }}
            >
              Consistency beats intensity. 3.5 hours of focused work per day
              compounds faster than 10 hours of scattered effort.
            </p>
          </div>

          {dailyRoutine.map((r, i) => (
            <div
              key={i}
              style={{
                background: '#111118',
                border: '1px solid #1E1E2A',
                borderLeft: `3px solid ${phase.color}`,
                borderRadius: '6px',
                padding: '16px 20px',
                marginBottom: '10px',
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  color: phase.color,
                  letterSpacing: '2px',
                  marginBottom: '6px',
                }}
              >
                {r.time}
              </div>
              <div style={{ fontSize: '13px', color: '#CCC', lineHeight: 1.5 }}>
                {r.activity}
              </div>
            </div>
          ))}

          <div
            style={{
              background: `${phase.color}0D`,
              border: `1px solid ${phase.color}30`,
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
            }}
          >
            <div
              style={{
                fontSize: '10px',
                letterSpacing: '3px',
                color: phase.color,
                marginBottom: '10px',
              }}
            >
              RULES OF THE PROGRAM
            </div>
            {[
              'Never skip two days in a row. One is a slip. Two is a new habit — the wrong one.',
              'Struggle for 20 minutes before looking at hints. That struggle IS the learning.',
              'Code every solution by hand before running it. Your brain needs the reps.',
              'Write about what you learned. Teaching forces clarity.',
              'Apply everything to VetConnect. Real projects make knowledge stick.',
            ].map((rule, i) => (
              <div
                key={i}
                style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}
              >
                <span
                  style={{
                    color: phase.color,
                    fontWeight: '700',
                    fontSize: '12px',
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}.
                </span>
                <span
                  style={{ fontSize: '12px', color: '#AAA', lineHeight: 1.5 }}
                >
                  {rule}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'resources' && (
        <div style={{ padding: '24px' }}>
          <div style={{ marginBottom: '24px' }}>
            <div
              style={{
                fontSize: '10px',
                letterSpacing: '3px',
                color: phase.color,
                marginBottom: '8px',
              }}
            >
              YOUR TOOLKIT
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: '900', margin: 0 }}>
              Curated Resources
            </h2>
          </div>

          {[
            {
              category: 'PROBLEM SOLVING',
              items: [
                {
                  name: 'LeetCode',
                  detail:
                    'Primary practice ground. Focus: Easy → Medium → Hard progression',
                },
                {
                  name: 'Neetcode.io',
                  detail:
                    'Best free curriculum. Follow the roadmap — it maps to this program',
                },
                {
                  name: 'Blind 75 List',
                  detail:
                    'The 75 problems that cover 90% of patterns. Complete all of them.',
                },
              ],
            },
            {
              category: 'JAVA MASTERY',
              items: [
                {
                  name: 'Effective Java – Joshua Bloch',
                  detail:
                    'The Bible for Java engineers. Read Ch. 1-5 during weeks 1-2.',
                },
                {
                  name: 'Java Visualizer (Online)',
                  detail:
                    'Visualize heap/stack/references as your code runs. Kills confusion.',
                },
                {
                  name: 'Baeldung.com',
                  detail:
                    'Best Java + Spring Boot reference articles on the internet.',
                },
              ],
            },
            {
              category: 'SYSTEMS & DESIGN',
              items: [
                {
                  name: 'Grokking System Design',
                  detail:
                    "Week 4 core reading. Covers every major pattern you'll be asked about.",
                },
                {
                  name: 'Clean Code – Robert Martin',
                  detail:
                    'Read during Week 4. Will change how you write every line of code.',
                },
                {
                  name: 'Refactoring.Guru',
                  detail:
                    'Free, visual breakdowns of every design pattern with Java examples.',
                },
              ],
            },
            {
              category: 'CAREER ACCELERATION',
              items: [
                {
                  name: 'GitHub',
                  detail:
                    'Commit every single day. Streak = visible proof of consistency.',
                },
                {
                  name: 'Tech Interview Handbook',
                  detail:
                    'Free. Covers resume, LinkedIn, behavioral questions, negotiation.',
                },
                {
                  name: 'CodeCrafters',
                  detail:
                    'Build Redis, Git, HTTP server from scratch. Exceptional depth builder.',
                },
              ],
            },
          ].map((section) => (
            <div key={section.category} style={{ marginBottom: '20px' }}>
              <div
                style={{
                  fontSize: '9px',
                  letterSpacing: '3px',
                  color: '#555',
                  marginBottom: '8px',
                }}
              >
                {section.category}
              </div>
              {section.items.map((item) => (
                <div
                  key={item.name}
                  style={{
                    background: '#111118',
                    border: '1px solid #1E1E2A',
                    borderRadius: '6px',
                    padding: '12px 14px',
                    marginBottom: '6px',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      color: phase.color,
                      fontSize: '10px',
                      marginTop: '2px',
                      flexShrink: 0,
                    }}
                  >
                    ▸
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: '#DDD',
                        marginBottom: '3px',
                      }}
                    >
                      {item.name}
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: '#666',
                        lineHeight: 1.4,
                      }}
                    >
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Progress Footer */}
      <div
        style={{ padding: '16px 24px 32px', borderTop: '1px solid #1A1A2A' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '6px',
          }}
        >
          <span
            style={{ fontSize: '9px', color: '#444', letterSpacing: '2px' }}
          >
            PROGRAM PROGRESS
          </span>
          <span
            style={{
              fontSize: '9px',
              color: phase.color,
              letterSpacing: '1px',
            }}
          >
            PHASE {activePhase + 1} OF 4
          </span>
        </div>
        <div
          style={{
            background: '#1A1A2A',
            borderRadius: '2px',
            height: '3px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              background: phase.color,
              height: '100%',
              width: `${((activePhase + 1) / 4) * 100}%`,
              transition: 'width 0.4s ease',
            }}
          />
        </div>
      </div>
    </div>
  );
}
