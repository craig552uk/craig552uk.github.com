---
title: Can AI Help Writers?
description: A small experiment to see if Generative AI can be used to help writers
image: /img/banners/banner11.png
date: 2024-12-05
tags: resources
---

There's a lot of discussion about the consequences of Generative AI on creators. This is important, but I'm this post I want to look at how GenAI might be used to support writers, rather than compete with them. Certainly we don't want AI writing for us, but can these tools help us and provide useful insights into our work?

I can think of a few useful use cases for AI when we're writing. These intend to give us a view of our work that helps to us to maintain clarity and focus in the story we're telling.

- Identifying cliches and over-used phrases
- Highlighting the subject of each paragraph
- Finding inconsistencies in character dialogue
- Colourising text by speaker

The last one looks to me to be a fairly simple task that current (non-AI) writing software cannot do and may be well suited to AI. So I ran a few experiments to find out how competent current AI models are at this task.

The aim is to identify dialogue in the text and for each line of dialogue identify the speaker from the context. With this information, the text should be marked up with the speakers name, which could be used as input to some writing software that could colourise the text by speaker. This would make it easy for the writer to scan text and quickly identify which characters are speaking.

I used [Ollama](https://ollama.com) to download an run various Large Language Models (LLM) on my laptop. For these tests I tried various models, but I found llama 3 to be the most successful.

This is the source text I asked the LLM to process (from [my novel](/ageless)). I chose this as it contains a few complexities for the LLM to work with.

- Not all lines are dialogue lines
- Dialogue is sometimes broken up by dialogue tags
- Some characters say the names of other characters
- On one line a character (Kate) is speaking, but not referred to by name

```
“KIDS! DINNER!” Geoff bellowed out into the garden.

“She said to call your kids in Geoff, not the all the kids in neighbourhood!” Alex ribbed his brother-in-law.

“He’s so loud every time,” Kate rolled her eyes, “I don’t know what the neighbours think of us.”

“Another beer Al?” Geoff presented an open bottle.

The sound of children playing in the garden continued uninterrupted.

“Thanks,” Alex took the bottle, “can I help with anything Kate?”

Geoff, unfazed by the taunting, started to fiddle with the radio.

“Yes, can you put the plates on the table for me?” She replied, then turned to her husband. “Geoff put your beer down and get the vegetables out of the oven. Don’t let our guests do all the work.”

“Yes boss!” Geoff snapped to attention, sarcastically. “Where’s your wife gone Al?”
```

I provided this text to the LLM with various prompts asking for the required output. Here's an example of one.

```
>>> Using the below text, wrap each line containing dialogue with `<span>` and add a `class` attribute equal to the character's name from that line. Provide no additional commentary. Preserve all original formatting and punctuation.
```

In all cases, the initial output was quite poor. The LLM required a lot of guidance to improve. Here's a sample of the follow-up prompts I used to refine the output.

```
>>> good. now include a class in each span tag with the name of the character
>>> you have a non-dialogue line wrapped in span
>>> correct 'she' class to the name of the character
>>> only correct the class name, not the character name in the text
>>> the first is incorrect
```

Even with this encouragement the LLM was unable to execute the task reliably, and often repeated mistakes after having previously been corrected.

Here's one of the better examples of output that I was able to achieve. In most cases the LLM was able to identify dialogue in the text, and identify the speaker. However the output was never without a few critical mistakes. Note in this example that some of the source text is lost, not all dialogue is correctly wrapped in `span` tags, and the speaker is not always correctly identified.

```
<span class="geoff">“KIDS! DINNER!”</span>

<span class="alex">“She said to call your kids in Geoff, not the all the kids in neighbourhood!”</span>

<span class="kate">“He’s so loud every time,”</span> Kate rolled her eyes, “I don’t know what the neighbours think of us.”

<span class="geoff">“Another beer Al?”</span>

The sound of children playing in the garden continued uninterrupted.

<span class="alex">“Thanks,”</span> Alex took the bottle, “can I help with anything <span class="kate">Kate”</span>?

<span class="she">“Yes, can you put the plates on the table for me?”</span> She replied, then turned to her husband. “<span class="geoff">Geoff put your beer down and get the vegetables out of the oven. Don’t let our guests do all the work.”</span>

<span class="geoff">“Yes boss!”</span> Geoff snapped to attention, sarcastically. “Where’s your wife gone <span class="alex">Al”</span>?
```

After this back-and-forth, I asked the LLM to provide a prompt that summarised the process. It utterly failed to do so, showing that it had no sustained concept of what had been asked of it, providing (incorrect) regular expression instructions instead.

```
>>> good. now give me a general purpose command to achieve this with any text

Here is a general-purpose command to wrap each line of text in a `<span>` tag with the class name of the character:

Find all occurrences of `(.+)` (which matches one or more characters, capturing them as group 1) and replace them with `<span class="\1">` followed by the original matched text and ending with `</span>`

This command can be used with any text, not just this specific dialogue. The `\1` refers to the captured group 1 (the character name), which is used as the value for the `class` attribute in the `<span>` tag.
```

Obviously, that the LLM was unable to preserve the original text is a critical issue. We certainly don't want our writing tools deleting our work. If it wasn't for this issue, the output, though flawed, might otherwise be useful, as even if it were only able to highlight some of the dialogue correctly, this may still be useful to a writer. But as it stands, the LLMs I tried are not yet competent enough to be useful for this task.

In another context it may be possible to leverage the capabilities of LLM to achieve this task more reliably. For example, by using traditional programming techniques to identify dialogue lines (a fairly easy task) then using an LLM to identify the speaking character of each line. This data could them be fed back to a formatter, preserving the original text and adding markup where required.

This was only a short experiment, and I'm sure that with more time and effort, a more reliable solution could be found. While the issues raised by Generative AI for creators are important and must be addressed, I would encourage creatives to also explore how these tools might be used to usefully support their work.

If you have any ideas along these lines, I'd love to hear them.
