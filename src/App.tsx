const DOWNLOAD_URL = 'https://github.com/NikAtNight/patchdeck/releases/latest'
const GITHUB_URL = 'https://github.com/NikAtNight/patchdeck'

const FEATURES = [
  {
    kicker: 'Review',
    heading: 'PR-style review, locally',
    body: 'The commits unique to a branch, a collapsible file tree with statuses and line counts, and unified diffs with Xcode-style syntax coloring.',
  },
  {
    kicker: 'Compare',
    heading: 'Compares like GitHub does',
    body: 'Merge-base semantics equivalent to base...branch, with main or master suggested automatically.',
  },
  {
    kicker: 'Track',
    heading: 'Tracks what you have read',
    body: 'Viewed-file state is scoped to the exact repo, merge base, and compare commit, so a force-push never lies to you.',
  },
  {
    kicker: 'Workspace',
    heading: 'Every repo in one window',
    body: 'Open a workspace folder and Patchdeck finds the repos inside it. Tabs, comparisons, and selection survive a relaunch.',
  },
  {
    kicker: 'Agents',
    heading: 'An agent board beside the code',
    body: 'Hermes kanban lanes, task detail, runs, and logs sit next to the diff. Create tasks, transition them, and send file and line comments straight back to the agent.',
  },
  {
    kicker: 'Editor',
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

function Kicker({ children }: { children: string }) {
  return (
    <p className="text-[10px] font-semibold tracking-[0.14em] text-fg-muted uppercase">{children}</p>
  )
}

function DownloadButton({ large = false }: { large?: boolean }) {
  return (
    <a
      href={DOWNLOAD_URL}
      className={`inline-block rounded-lg bg-accent font-medium text-white transition-colors hover:bg-accent-hover ${
        large ? 'px-7 py-3 text-base' : 'px-4 py-1.5 text-sm'
      }`}
    >
      Download for macOS
    </a>
  )
}

// The hero visual is the app itself in miniature: a macOS window
// showing a unified diff in the app's semantic colors.
function DiffWindow() {
  return (
    <div className="overflow-hidden rounded-xl border border-edge bg-inset shadow-2xl">
      <div className="flex items-center gap-2 border-b border-edge bg-panel px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-fg-muted">Patchdeck · feature/agents...main</span>
      </div>
      <div className="font-mono px-2 py-4 text-sm leading-loose sm:px-4 sm:text-base">
        <p className="rounded-md bg-del/12 px-3 py-1 text-del">
          <span className="mr-4 select-none">-</span>wait for CI, review in a browser tab
        </p>
        <p className="mt-1 rounded-md bg-add/12 px-3 py-1 text-add">
          <span className="mr-4 select-none">+</span>review on your machine, before it ships
          <span className="cursor-blink ml-1 inline-block h-4 w-2 translate-y-0.5 bg-fg-soft sm:h-5" />
        </p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-edge bg-editor/85 backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <a href="#top" className="text-[15px] font-semibold tracking-tight">
            Patchdeck
          </a>
          <div className="flex items-center gap-6 text-sm text-fg-soft">
            <a href="#features" className="hidden transition-colors hover:text-fg sm:block">Features</a>
            <a href="#safety" className="hidden transition-colors hover:text-fg sm:block">Safety</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg">
              GitHub
            </a>
            <DownloadButton />
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="pt-32 pb-20">
          <Kicker>Local-first code review for the agent era</Kicker>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            Your agents write the code. You hold the deck.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-soft">
            Patchdeck is a desktop workbench for reviewing Git branches,
            editing changes, and coordinating AI agent tasks. Pull-request-style
            review without the pull request, and nothing gets published
            without you.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <DownloadButton large />
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-edge-strong bg-panel px-7 py-3 text-base font-medium text-fg-soft transition-colors hover:bg-panel-raised hover:text-fg"
            >
              View on GitHub
            </a>
          </div>
          <p className="font-mono mt-4 text-xs text-fg-faint">
            v0.5.0 · Tauri 2 + Rust · open source
          </p>
          <div className="mt-14 max-w-2xl">
            <DiffWindow />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-24 border-t border-edge py-20">
          <Kicker>Features</Kicker>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">The review desk</h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.heading}
                className="rounded-xl border border-edge bg-panel p-6 transition-colors hover:border-edge-strong"
              >
                <Kicker>{feature.kicker}</Kicker>
                <h3 className="mt-2.5 text-[15px] font-semibold">{feature.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Safety */}
        <section id="safety" className="scroll-mt-24 border-t border-edge py-20">
          <Kicker>Safety</Kicker>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight">
            Read-only by design
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-fg-soft">
            A review tool that could accidentally push would not be a review
            tool. Patchdeck&rsquo;s Rust core treats your repositories, and the
            agents attached to them, as things to observe and direct, not
            things to mutate behind your back.
          </p>
          <ul className="mt-8 max-w-2xl space-y-2.5">
            {SAFETY.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-lg border border-edge bg-panel px-4 py-3 text-sm text-fg-soft"
              >
                <span className="font-semibold text-add">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Download band */}
        <section className="border-t border-edge py-24 text-center">
          <div className="font-mono mx-auto inline-block text-left text-lg sm:text-xl">
            <p className="rounded-md bg-del/12 px-4 py-1 text-del">
              <span className="mr-3 select-none">-</span>trust the summary
            </p>
            <p className="mt-1 rounded-md bg-add/12 px-4 py-1 text-add">
              <span className="mr-3 select-none">+</span>read the diff
            </p>
          </div>
          <div className="mt-10">
            <DownloadButton large />
          </div>
          <p className="font-mono mt-4 text-xs text-fg-faint">macOS · Apple Silicon and Intel · v0.5.0</p>
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
