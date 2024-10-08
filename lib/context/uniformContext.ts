import {
	Context,
	ContextPlugin,
	enableContextDevTools,
	enableDebugConsoleLogDrain,
	enableUniformInsights,
	ManifestV2,
} from "@uniformdev/context";
import { NextCookieTransitionDataStore } from "@uniformdev/context-next";
import { NextPageContext } from "next";

import manifest from "./manifest.json";

export function createUniformContext(serverContext?: NextPageContext) {
	const plugins: ContextPlugin[] = [
		enableContextDevTools(),
		enableDebugConsoleLogDrain("debug"),
	];

	const context = new Context({
		defaultConsent: true,
		manifest: manifest as ManifestV2,
		transitionStore: new NextCookieTransitionDataStore({
			serverContext,
		}),
		plugins: plugins,
	});

	return context;
}
