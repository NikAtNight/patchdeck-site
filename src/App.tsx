const DOWNLOAD_URL = 'https://github.com/NikAtNight/patchdeck/releases/latest'
const GITHUB_URL = 'https://github.com/NikAtNight/patchdeck'

const FEATURES = [
  {
    title: 'review.rs',
    heading: 'PR-style review, locally',
    body: 'The commits unique to a branch, a collapsible file tree with statuses and line counts, and unified diffs with IDE-style syntax coloring.',
  },
  {
    title: 'merge_base.rs',
    heading: 'Compares like GitHub does',
    body: 'Merge-base semantics equivalent to base...branch, with main or master suggested automatically.',
  },
  {
    title: 'viewed.rs',
    heading: 'Tracks what you have read',
    body: 'Viewed-file state is scoped to the exact repo, merge base, and compare commit, so a force-push never lies to you.',
  },
  {
    title: 'tabs.rs',
    heading: 'Every repo in one window',
    body: 'Open a workspace folder and PatchDeck finds the repos inside it. Tabs, comparisons, and selection survive a relaunch.',
  },
  {
    title: 'board.rs',
    heading: 'An agent board beside the code',
    body: 'Hermes kanban lanes, task detail, runs, and logs sit next to the diff. Create tasks, transition them, and send file and line comments straight back to the agent.',
  },
  {
    title: 'editor.rs',
    heading: 'A guarded editor',
    body: 'Fix small things in the working tree with path containment, symlink-escape checks, optimistic concurrency, and atomic saves.',
  },
]

const SAFETY = [
  'Git inspection is read-only: direct invocation, no shell, allowlisted read operations only',
  'The editor cannot touch the index, move refs, switch branches, or contact remotes',
  'Hermes attaches over loopback only, and the session credential never reaches the UI',
  'No commit, push, pull request, or publication ever happens automatically',
]

function DiffHeadline() {
  return (
    <div className="font-mono overflow-hidden rounded-xl border border-edge bg-panel text-left text-base leading-loose shadow-2xl sm:text-xl">
      <div className="flex items-center gap-2 border-b border-edge px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-del/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-add/70" />
        <span className="ml-3 text-xs text-fg-faint">review.diff</span>
      </div>
      <div className="px-2 py-4 sm:px-4">
        <p className="rounded bg-del-dim/60 px-3 py-1 text-del">
          <span className="mr-4 select-none">-</span>wait for CI, review in a browser tab
        </p>
        <p className="mt-1 rounded bg-add-dim/60 px-3 py-1 text-add">
          <span className="mr-4 select-none">+</span>review on your machine, before it ships
          <span className="cursor-blink ml-1 inline-block h-5 w-2.5 translate-y-1 bg-add/80 sm:h-6" />
        </p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-edge bg-editor/85 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#top" className="font-mono text-lg font-bold tracking-tight">
            <span className="text-add">+</span>patchdeck
          </a>
          <div className="flex items-center gap-6 text-sm text-fg-soft">
            <a href="#features" className="hidden transition-colors hover:text-fg sm:block">Features</a>
            <a href="#safety" className="hidden transition-colors hover:text-fg sm:block">Safety</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg">
              GitHub
            </a>
            <a
              href={DOWNLOAD_URL}
              className="rounded-md bg-add px-4 py-2 font-mono text-sm font-bold text-editor transition hover:brightness-110"
            >
              Download
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="pt-36 pb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-fg-faint uppercase">
            Local-first code review for the agent era
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            Your agents write the code. You hold the deck.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-soft">
            PatchDeck is a desktop workbench for reviewing Git branches,
            editing changes, and coordinating AI agent tasks. Pull-request-style
            review without the pull request, and nothing gets published
            without you.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={DOWNLOAD_URL}
              className="rounded-md bg-add px-7 py-3 font-mono font-bold text-editor transition hover:brightness-110"
            >
              $ download for macOS
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-edge px-7 py-3 font-mono text-fg-soft transition-colors hover:border-fg-faint hover:text-fg"
            >
              view source
            </a>
          </div>
          <p className="mt-5 font-mono text-xs text-fg-faint">
            v0.5.0 · Tauri 2 + Rust · open source
          </p>
          <div className="mt-14 max-w-2xl">
            <DiffHeadline />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-24 border-t border-edge py-20">
          <h2 className="font-mono text-sm text-fg-faint">
            <span className="text-add">▸</span> features
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-edge bg-panel p-6 transition-colors hover:border-fg-faint/60">
                <p className="font-mono text-xs text-fg-faint">{feature.title}</p>
                <h3 className="mt-3 font-semibold">{feature.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-soft">{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Safety */}
        <section id="safety" className="scroll-mt-24 border-t border-edge py-20">
          <h2 className="font-mono text-sm text-fg-faint">
            <span className="text-add">▸</span> safety
          </h2>
          <h3 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Read-only by design
          </h3>
          <p className="mt-4 max-w-2xl leading-relaxed text-fg-soft">
            A review tool that could accidentally push would not be a review
            tool. PatchDeck&rsquo;s Rust core treats your repositories, and the
            agents attached to them, as things to observe and direct, not
            things to mutate behind your back.
          </p>
          <ul className="mt-8 max-w-2xl space-y-3">
            {SAFETY.map((item) => (
              <li key={item} className="flex gap-3 rounded-lg border border-edge bg-panel px-4 py-3 text-sm text-fg-soft">
                <span className="font-mono font-bold text-add">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Download band */}
        <section className="border-t border-edge py-24 text-center">
          <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-del">-</span> trust the summary{'  '}
            <span className="ml-3 text-add">+</span> read the diff
          </h2>
          <div className="mt-10">
            <a
              href={DOWNLOAD_URL}
              className="rounded-md bg-add px-8 py-3.5 font-mono text-lg font-bold text-editor transition hover:brightness-110"
            >
              $ download for macOS
            </a>
          </div>
          <p className="mt-5 font-mono text-xs text-fg-faint">macOS · Apple Silicon and Intel · v0.5.0</p>
        </section>
      </main>

      <footer className="border-t border-edge py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-fg-faint">
          <span>© 2026 Nikhil Kapadia</span>
          <div className="flex gap-6">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg">GitHub</a>
            <a href="https://github.com/NikAtNight" target="_blank" rel="noreferrer" className="transition-colors hover:text-fg">More by NaN</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
