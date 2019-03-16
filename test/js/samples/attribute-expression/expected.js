/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, createComment, createElement, destroyEach, detachNode, init, insert, noop, safe_not_equal, setAttribute } from "svelte/internal";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.item = list[i];
	return child_ctx;
}

// (1:0) {#each Array(1) as item}
function create_each_block(ctx) {
	var boo;

	function func() {
		return ctx.func(ctx);
	}

	return {
		c() {
			boo = createElement("boo");
			setAttribute(boo, "cb", func);
		},

		m(target, anchor) {
			insert(target, boo, anchor);
		},

		p(changed, new_ctx) {
			ctx = new_ctx;
		},

		d(detach) {
			if (detach) {
				detachNode(boo);
			}
		}
	};
}

function create_fragment(ctx) {
	var each_anchor;

	var each_value = Array(1);

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_anchor = createComment();
		},

		m(target, anchor) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_anchor, anchor);
		},

		p: noop,
		i: noop,
		o: noop,

		d(detach) {
			destroyEach(each_blocks, detach);

			if (detach) {
				detachNode(each_anchor);
			}
		}
	};
}

function instance($$self) {
	function func({ item }) {
		return item;
	}

	return { func };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal);
	}
}

export default SvelteComponent;