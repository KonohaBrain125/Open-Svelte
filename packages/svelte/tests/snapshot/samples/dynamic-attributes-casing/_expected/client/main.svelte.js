// main.svelte (Svelte VERSION)
// Note: compiler output will change before 5.0 is released!
import "svelte/internal/disclose-version";
import * as $ from "svelte/internal";

var frag = $.template(`<div></div> <svg></svg> <custom-element></custom-element> <div></div> <svg></svg> <custom-element></custom-element>`, true);

export default function Main($$anchor, $$props) {
	$.push($$props, true);

	// needs to be a snapshot test because jsdom does auto-correct the attribute casing
	let x = 'test';
	let y = () => 'test';
	/* Init */
	var fragment = $.open_frag($$anchor, false, frag);
	var div = $.child_frag(fragment);
	var svg = $.sibling($.sibling(div, true));
	var custom_element = $.sibling($.sibling(svg, true));
	var div_1 = $.sibling($.sibling(custom_element, true));
	var svg_1 = $.sibling($.sibling(div_1, true));
	var custom_element_1 = $.sibling($.sibling(svg_1, true));

	/* Update */
	$.attr_effect(div_1, "foobar", y);
	$.attr_effect(svg_1, "viewBox", y);
	$.set_custom_element_data_effect(custom_element_1, "fooBar", y);

	var div_foobar;
	var svg_viewBox;
	var custom_element_fooBar;

	$.render_effect(() => {
		if (div_foobar !== (div_foobar = x)) {
			$.attr(div, "foobar", div_foobar);
		}

		if (svg_viewBox !== (svg_viewBox = x)) {
			$.attr(svg, "viewBox", svg_viewBox);
		}

		if (custom_element_fooBar !== (custom_element_fooBar = x)) {
			$.set_custom_element_data(custom_element, "fooBar", custom_element_fooBar);
		}
	});

	$.close_frag($$anchor, fragment);
	$.pop();
}