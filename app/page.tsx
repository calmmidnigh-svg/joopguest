"use client";

import { useState, FormEvent } from "react";
import { Tag, CheckCheck, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

interface HeroFormState {
  email: string;
  submitted: boolean;
  loading: boolean;
}

interface BottomFormState {
  name: string;
  email: string;
  submitted: boolean;
  loading: boolean;
}

function Logo() {
  return (
    <span className="text-xl font-bold tracking-tight text-ink-strong">
      줍<span className="text-brand-600">.</span>
    </span>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#EEEEEE] bg-[rgba(250,250,247,0.85)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
        <Logo />
        <a
          href="#notify"
          className="rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          사전 알림 신청
        </a>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  const [form, setForm] = useState<HeroFormState>({
    email: "",
    submitted: false,
    loading: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.email) return;
    setForm((f) => ({ ...f, loading: true }));
    setTimeout(() => {
      console.log("[Hero] 이메일 신청:", form.email);
      setForm((f) => ({ ...f, submitted: true, loading: false }));
    }, 800);
  };

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-14"
      style={{ background: "linear-gradient(135deg, #FAFAF7 0%, #FFEEE5 55%, #FFDECC 100%)" }}
    >
      <div aria-hidden className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brand-300/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Label */}
        <div className="mb-8 animate-fade-in opacity-0 [animation-fill-mode:forwards]">
          <span className="inline-block rounded-full border border-brand-200 bg-brand-50 px-8 py-2 text-xs font-semibold uppercase tracking-widest text-brand-600">
            GUEST EARLY ACCESS
          </span>
        </div>

        {/* Headline — 피그마와 동일하게 다크 텍스트, 그라디언트 없음 */}
        <h1 className="animate-fade-up mb-6 text-4xl font-bold leading-tight tracking-tight text-ink-strong opacity-0 [animation-delay:150ms] [animation-fill-mode:forwards] sm:text-5xl md:text-6xl">
          비어있는 좋은 숙소,
          <br />
          가볍게 줍다.
        </h1>

        <p className="animate-fade-up mb-12 text-base leading-relaxed text-ink-muted opacity-0 [animation-delay:250ms] [animation-fill-mode:forwards] sm:text-lg">
          갑작스러운 취소, 평일의 빈 방.
          <br className="hidden sm:block" />
          퀄리티 높은 숙소를 수수료 거품 없이 가장 합리적인 가격으로 만나보세요.
        </p>

        {/* CTA Form */}
        <div className="animate-fade-up opacity-0 [animation-delay:350ms] [animation-fill-mode:forwards]">
          {form.submitted ? (
            <div className="flex flex-col items-center gap-3 rounded-2xl bg-white/90 px-8 py-8 shadow-lg ring-1 ring-brand-100">
              <CheckCircle2 className="h-10 w-10 text-brand-600" />
              <p className="text-lg font-semibold text-ink-strong">신청이 완료되었습니다!</p>
              <p className="text-sm text-ink-muted">정식 오픈 소식과 특별 혜택을 가장 먼저 알려드릴게요.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="이메일 주소를 입력해 주세요"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="flex-1 rounded-xl border border-[#EEEEEE] bg-white px-5 py-3 text-sm text-ink-default shadow-sm outline-none placeholder:text-[#AAAAAA] focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
              <button
                type="submit"
                disabled={form.loading}
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-700 active:scale-95 disabled:opacity-70"
                style={{ boxShadow: "0 8px 24px rgba(255,90,0,0.24)" }}
              >
                {form.loading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                ) : (
                  <>첫 줍기 혜택 알림 받기 <ArrowRight className="h-4 w-4" /></>
                )}
              </button>
            </form>
          )}
          {!form.submitted && (
            <p className="mt-3 text-xs text-[#AAAAAA]">스팸 메일은 보내지 않습니다. 언제든지 수신 거부 가능합니다.</p>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Problem ──────────────────────────────────────────────────────────────────

function ProblemSection() {
  return (
    <section className="bg-[#222222] px-5 py-28 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        {/* 피그마: orange-200 배경 */}
        <span className="inline-block rounded-full bg-brand-200 px-10 py-2 text-xs font-semibold uppercase tracking-widest text-brand-600">
          PROBLEM
        </span>
        <h2 className="mx-auto mt-6 max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          <span className="text-white">좋은 숙소는 왜 </span>
          <span style={{ color: "#FF8B4D" }}>항상 비싸야만</span>
          <span className="text-white"> 할까요?</span>
        </h2>
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-[#333333] p-8 text-left md:p-10">
          <p className="text-base leading-8 text-[#EEEEEE] sm:text-lg">
            마음에 드는 숙소는 너무 비싸고, 저렴한 곳은 아쉽습니다. 하지만 아무리 인기 있는 숙소라도{" "}
            <span className="font-bold text-white">피치 못할 예약 취소나 비수기에는 빈 방(공실)</span>
            이 생기기 마련입니다.
          </p>
          <p className="mt-3 text-base leading-8 text-[#EEEEEE] sm:text-lg">
            이 아까운 빈 공간들을 게스트가 부담 없이 누릴 방법은 없을까요?
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Solution ─────────────────────────────────────────────────────────────────

interface SolutionCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SolutionSection() {
  const cards: SolutionCard[] = [
    {
      icon: <Tag className="h-7 w-7 text-brand-600" />,
      title: "가벼운 가격으로 줍다",
      description: "기존 예약 플랫폼들이 가져가던 과도한 수수료를 걷어냈습니다. 플랫폼이 가벼워진 만큼, 게스트는 더 정직하고 낮은 가격으로 숙소를 예약할 수 있습니다.",
    },
    {
      icon: <CheckCheck className="h-7 w-7 text-brand-600" />,
      title: "숨어있는 퀄리티를 줍다",
      description: "무수히 많은 리스트 속에서 피곤하게 비교할 필요 없습니다. 엄선된 기준을 통과한 퀄리티 높은 숙소의 빈 방만을 선별하여 제안합니다.",
    },
    {
      icon: <Zap className="h-7 w-7 text-brand-600" />,
      title: "즉흥적인 설렘을 줍다",
      description: "완벽한 여행 계획이 없어도 괜찮습니다. 훌쩍 떠나고 싶은 날, 매력적인 가격으로 오픈된 숙소를 우연히 발견하고 줍는 기쁨을 누려보세요.",
    },
  ];

  return (
    <section className="bg-canvas px-5 py-28 md:py-32">
      <div className="mx-auto max-w-2xl">
        <div className="mb-16 text-center">
          {/* 피그마: orange-200 배경 */}
          <span className="inline-block rounded-full bg-brand-200 px-10 py-2 text-xs font-semibold uppercase tracking-widest text-brand-600">
            SOLUTION
          </span>
          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            <span className="text-ink-strong">호스트의 아까운 빈 방이,</span>
            <br />
            <span className="text-brand-600">게스트에겐 기회가 됩니다.</span>
          </h2>
        </div>

        {/* 피그마: 세로 스택, 카드 고정 높이 */}
        <div className="flex flex-col gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white p-10"
              style={{ boxShadow: "0 1px 3px rgba(34,34,34,0.06), 0 1px 2px rgba(34,34,34,0.04)" }}
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50">
                {card.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-ink-strong">{card.title}</h3>
              <p className="text-base leading-7 text-ink-muted">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Vision ───────────────────────────────────────────────────────────────────

function VisionSection() {
  return (
    <section className="bg-canvas px-5 py-28 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-ink-strong sm:text-4xl">
          일상을 여행으로 만드는
          <br />
          가장 가벼운 방법
        </h2>
        <p className="mx-auto max-w-lg text-base leading-8 text-[#444444] sm:text-lg">
          특별한 기념일이나 완벽한 준비가 없어도 좋습니다.
          <br />
          지친 일상 속에서 좋은 공간을 가볍게 줍고 떠나는 것만으로도,
          <br />
          여러분의 내일은 훨씬 더 산뜻해질 거에요.
        </p>

        {/* 피그마: 흰 카드, 오렌지 값, #888 레이블 */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-4">
          {[
            { value: "0원", label: "숨겨진 수수료" },
            { value: "엄선", label: "퀄리티 숙소" },
            { value: "즉시", label: "예약 가능" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white px-4 py-9"
              style={{ boxShadow: "0 1px 3px rgba(34,34,34,0.06)" }}
            >
              <p className="text-2xl font-extrabold text-brand-600">{stat.value}</p>
              <p className="mt-1 text-sm text-[#888888]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Bottom CTA ───────────────────────────────────────────────────────────────

function BottomCTASection() {
  const [form, setForm] = useState<BottomFormState>({
    name: "",
    email: "",
    submitted: false,
    loading: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setForm((f) => ({ ...f, loading: true }));
    setTimeout(() => {
      console.log("[Bottom CTA] 사전 알림 신청:", { name: form.name, email: form.email });
      setForm((f) => ({ ...f, submitted: true, loading: false }));
    }, 800);
  };

  return (
    <section id="notify" className="bg-[#F5F5F5] px-5 py-28 md:py-32">
      <div className="mx-auto max-w-2xl">
        <div
          className="overflow-hidden rounded-[20px] bg-white p-10 md:p-10"
          style={{ boxShadow: "0 20px 40px rgba(34,34,34,0.1)" }}
        >
          <div className="mb-6 text-center">
            <span className="inline-block rounded-full bg-brand-200 px-10 py-2 text-xs font-semibold uppercase tracking-widest text-brand-600">
              EARLY ACCESS
            </span>
          </div>

          <h2 className="text-center text-2xl font-bold leading-tight tracking-tight text-ink-strong sm:text-3xl md:text-4xl">
            가장 먼저 좋은 숙소를 주울 준비
            <br />
            <span className="font-extrabold text-brand-600">되셨나요?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-md text-center text-sm leading-7 text-ink-muted sm:text-base">
            지금 사전 알림을 신청하시면,
            <br />
            정식 오픈 소식과 함께 첫 여행을 더욱 가볍게 만들어줄{" "}
            <span className="font-bold text-ink-default">특별한 쿠폰</span>을 챙겨드립니다.
          </p>

          <div className="mt-10">
            {form.submitted ? (
              <div className="flex flex-col items-center gap-4 rounded-2xl bg-brand-50 px-8 py-10">
                <CheckCircle2 className="h-12 w-12 text-brand-600" />
                <div className="text-center">
                  <p className="text-lg font-bold text-ink-strong">{form.name}님, 신청이 완료되었습니다!</p>
                  <p className="mt-2 text-sm text-ink-muted">정식 오픈 시 특별 쿠폰과 함께 연락드릴게요.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* 피그마: floating label 스타일 */}
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder=" "
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="peer w-full rounded-xl border border-[#EEEEEE] bg-white px-5 pt-5 pb-2 text-sm text-ink-default outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    />
                    <label
                      htmlFor="name"
                      className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-sm text-[#AAAAAA] transition-all peer-focus:top-3 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-brand-600 peer-not-placeholder-shown:top-3 peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-xs"
                    >
                      성함
                    </label>
                  </div>
                  <div className="relative flex-1">
                    <input
                      id="bottom-email"
                      type="email"
                      required
                      placeholder=" "
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="peer w-full rounded-xl border border-[#EEEEEE] bg-white px-5 pt-5 pb-2 text-sm text-ink-default outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    />
                    <label
                      htmlFor="bottom-email"
                      className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-sm text-[#AAAAAA] transition-all peer-focus:top-3 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-brand-600 peer-not-placeholder-shown:top-3 peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-xs"
                    >
                      이메일
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={form.loading}
                  className="mt-1 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 py-4 text-sm font-semibold text-white transition-all hover:bg-brand-700 active:scale-[0.98] disabled:opacity-70"
                  style={{ boxShadow: "0 8px 24px rgba(255,90,0,0.24)" }}
                >
                  {form.loading ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  ) : (
                    <>사전 알림 및 쿠폰 신청하기 <ArrowRight className="h-4 w-4" /></>
                  )}
                </button>
                <p className="text-center text-xs text-[#AAAAAA]">
                  개인정보는 오픈 안내 목적으로만 활용되며, 이후 즉시 파기됩니다.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#F0F0EE] px-5 py-8 text-center">
      <p className="text-[11px] tracking-tight text-[#BBBBBB]">© 2026 ZOOP. All rights reserved.</p>
      <p className="mt-1 text-[11px] tracking-tight text-[#BBBBBB]">
        본 페이지는 서비스 출시 전 수요 검증을 위한 사전 대기자 모집 페이지입니다.
      </p>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <VisionSection />
      <BottomCTASection />
      <Footer />
    </main>
  );
}
