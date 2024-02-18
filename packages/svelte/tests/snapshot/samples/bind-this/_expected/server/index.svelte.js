// index.svelte (Svelte VERSION)
// Note: compiler output will change before 5.0 is released!
import * as $ from "svelte/internal/server";

export default function Bind_this($$payload, $$props) {
	$.push(false);

	const anchor = $.create_anchor($$payload);

	$$payload.out += `${anchor}`;
	Foo($$payload, {});
	$$payload.out += `${anchor}`;
	$.pop();
}