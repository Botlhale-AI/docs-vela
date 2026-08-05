---
id: how-scoring-works
title: How Scoring Works
sidebar_position: 1
type: explanation
---

# How Scoring Works

This page explains the thinking behind Vela's scoring, so you can interpret the numbers and decide how much weight to put on them. It does not give instructions. For those, see [Review and Score Interactions](../features/quality-assurance-tools.md) and [Scorecard Fields](../reference/scorecard-fields.md).

---

## Every interaction is scored, not a sample

Traditional QA reviews a handful of calls per agent per month. The sample is small enough that an agent's score says more about which calls happened to be chosen than about their work.

Vela scores every interaction it processes. That changes what the number means. An average across hundreds of interactions is stable in a way a five-call sample never is, and an outlier stops being alarming because you can see the distribution it sits in.

It also changes where your effort goes. The scarce resource is no longer coverage, it is attention. That is why the platform is built around Smart Searches and alerts: they decide which of the scored interactions deserve a human.

## The score is a weighted percentage

Each scorecard question carries a weight. For a given interaction, Vela adds up the weights of every applicable question to get a total, then adds up the weights of the questions the agent satisfied. The score is the second divided by the first, as a percentage.

Three consequences follow, and they surprise people:

**Weight is relative, not absolute.** A question weighted 10 among questions weighted 1 dominates the score. There is no scale to calibrate against, only the balance between your own questions.

**Questions marked N/A disappear entirely.** They are removed from both totals, not counted as failures. An interaction where half the scorecard did not apply is scored on the half that did, and is directly comparable to one where everything applied.

**Adding a question changes every future score.** The denominator moves. Scores before and after a scorecard change are not strictly comparable, which is why it is worth recording when you changed it.

A short example makes this concrete. Take a four-question scorecard:

| Question | Weight | Outcome |
| :--- | :--- | :--- |
| Verified the customer's identity | 3 | Pass |
| Explained the fee | 2 | Fail |
| Offered the callback option | 3 | Pass |
| Handled the transfer correctly | 2 | N/A |

The transfer question is N/A, so it drops out, leaving three questions worth 8 points between them. The agent passed two of those, worth 6 points, so the score is 6 out of 8, or **75%**. Had the transfer question been scored No instead, it would stay in the total, and the same call would score 6 out of 10, or 60%. That gap is why marking applicability correctly matters.

## When a question does not apply

Not every question fits every call. "Was the transfer handled correctly?" means nothing on a call with no transfer. A question marked **N/A** drops out of the score, as above, so it neither helps nor hurts the agent.

Whether the AI can use N/A comes down to the question's **Always Applicable** setting:

- **Off** (the default): the AI may answer Yes, No, or N/A. For it to choose N/A, the question has to say when it applies, for example *"If the call was transferred, did the agent introduce the receiving department?"* Without that cue, a question that did not apply is often scored No instead.
- **On**: only Yes or No are available. Use it for behaviour expected on every call. On a call where the question does not apply, the agent gets a No.

For questions the AI cannot judge from the transcript, two settings help:

- **Search Type: Manual** hands the question to a reviewer. It stays N/A until they answer.
- **Apply Knowledge Base** judges the question against one of your own documents rather than general knowledge, which is what questions like "did the agent complete full verification?" need. See [Knowledge Base](../knowledge-base-guide.md).

## Expected Outcome exists because questions are not always positive

Most scorecard questions are phrased so that "yes" is good: *Did the agent verify the customer's identity?* Some are naturally phrased the other way: *Did the agent interrupt the customer?*

Rather than force every question into positive phrasing, each one records which answer is the desired one. Vela compares the actual answer against that setting.

This is worth understanding because a mis-set Expected Outcome inverts a question silently. The scorecard looks correct, the AI answers correctly, and the score is wrong in a way that is hard to spot from the number alone.

## Changing a scorecard after interactions are scored

A score is fixed when the interaction is processed. Later edits to the scorecard do not re-score interactions that are already done, so a change applies only from that point on. To score older interactions on the new version, upload them again.

Take particular care with **Expected Outcome**. Change it after interactions have been scored, and their stored answers were judged against the old setting, so they look wrong until you re-process them.

If an interaction has no scorecard at all, for example because it was processed before you created one, open it and choose **Rerun Scorecard**.

## Auto-fail is recorded next to the score, not inside it

A question marked Auto-Fail represents something that should invalidate an interaction on its own, such as a regulatory disclosure that was never given.

Vela records auto-fail as a **flag alongside the score**, rather than forcing the percentage to zero. An auto-failed interaction still shows what it scored on everything else.

This is a deliberate choice, and a useful one. Zeroing the number would destroy information. Two auto-failed calls, one that scored 30% on everything else and one that scored 90%, need very different conversations. The first agent is struggling broadly. The second did good work and missed one critical step, which is usually a memory or process problem rather than a capability one.

The same applies to the compliance and quality subtotals, each of which carries its own auto-fail flag.

## Compliance and quality are two views of one scorecard

There are not two scorecards. Each question is either marked as a compliance item or it is not, and Vela calculates the same weighted percentage twice: once across the compliance questions, once across the rest.

The split exists because the two behave differently in practice. Compliance is usually binary and non-negotiable, and a dip matters immediately. Quality is a gradient you improve over months. Averaging them into a single figure hides both signals, since a compliance failure can be masked by strong quality work.

## Human judgement overrides the AI, by design

When a reviewer changes an outcome, their answer replaces the AI's for that question and the score is recalculated. The original answer stays visible next to the new one.

The reason for keeping both is accountability rather than nostalgia. A score a human has adjusted is a different kind of claim from one the AI produced alone, and an agent disputing a score is entitled to see which is which. It also lets you audit your own reviewers: if overrides consistently move scores in one direction, the problem is more likely the scorecard than the AI.

## What the AI judges well, and what it does not

Being clear about this protects you from over-trusting the number.

**Reliable:** whether specific words or phrases were said, whether a topic came up, the shape of the conversation, and how sentiment moved through it. These are close to observable facts in a transcript.

**Less reliable:** anything requiring context the transcript does not contain. Whether an exception was justified. Whether a customer was satisfied rather than merely polite. Whether an agent's brevity was efficient or dismissive. Sarcasm, cultural register, and the difference between a scripted phrase and a genuine one.

This is why scorecard questions work best when they describe something observable. *Did the agent state the cancellation notice period?* has an answer in the transcript. *Was the agent empathetic?* does not, and a question like that produces scores that feel arbitrary to the people receiving them.

Audio quality sets a ceiling on all of it. If the transcript is wrong, everything downstream inherits the error.

## Why Smart Questions are not scored

Plenty of things worth knowing about a conversation say nothing about the agent's performance. Whether a customer mentioned a competitor. Whether a particular product came up. Whether a known system fault was the cause.

Folding these into a scorecard would distort it, because the agent cannot influence the answer. Smart Questions exist so you can ask them without contaminating anyone's score. The answers are recorded and reportable, and they never touch the scoring calculation.

If you are unsure where a question belongs, ask what the answer describes. If it describes the **conversation**, it is a Smart Question. If it describes **what the agent did**, it belongs on the scorecard.

## Scope decides what is scored, not only what is seen

A scorecard applies to an organisation, a department, or a team. An interaction is scored against the scorecards covering the agent who handled it.

Two implications follow. Teams under different scorecards are not directly comparable, because they were measured against different criteria. And an interaction with no scorecard covering it gets no score at all, which is the usual explanation when processed calls appear with nothing in the score column.

## The thresholds are yours

Vela produces a percentage. It does not decide what counts as good.

The Red, Amber, and Green boundaries are set by your administrator, and everything that appears to be a judgement in the interface, such as an agent being flagged as underperforming, traces back to those numbers rather than to any platform default.

Set them against your own standards and history rather than an external benchmark. A score of 70% means whatever your scorecard makes it mean, and comparing that figure with another organisation's is comparing two different measurements that happen to share a unit.

---

## Related

- [Scorecard Fields](../reference/scorecard-fields.md): every field on a scorecard question
- [Metrics](../reference/metrics.md): what each score metric measures
- [Glossary](../reference/glossary.md): definitions of the terms used here
- [Review and Score Interactions](../features/quality-assurance-tools.md): reviewing and scoring interactions
