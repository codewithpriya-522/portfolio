(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/theme-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const ThemeProviderContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    theme: "system",
    setTheme: ()=>null
});
function ThemeProvider({ children, defaultTheme = "system" }) {
    _s();
    const [theme, setTheme] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](defaultTheme);
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ThemeProvider.useEffect": ()=>{
            setMounted(true);
            const savedTheme = localStorage.getItem("ui-theme");
            if (savedTheme) {
                setTheme(savedTheme);
            } else {
                setTheme(defaultTheme);
            }
        }
    }["ThemeProvider.useEffect"], [
        defaultTheme
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ThemeProvider.useEffect": ()=>{
            if (!mounted) return;
            const root = window.document.documentElement;
            root.classList.remove("light", "dark");
            if (theme === "system") {
                const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                root.classList.add(systemTheme);
                return;
            }
            root.classList.add(theme);
        }
    }["ThemeProvider.useEffect"], [
        theme,
        mounted
    ]);
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ThemeProvider.useMemo[value]": ()=>({
                theme,
                setTheme: ({
                    "ThemeProvider.useMemo[value]": (theme)=>{
                        localStorage.setItem("ui-theme", theme);
                        setTheme(theme);
                    }
                })["ThemeProvider.useMemo[value]"]
            })
    }["ThemeProvider.useMemo[value]"], [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeProviderContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/theme-provider.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(ThemeProvider, "xdRO2ssswP05AcQPA1uIwanc6rU=");
_c = ThemeProvider;
const useTheme = ()=>{
    _s1();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ThemeProviderContext);
    if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};
_s1(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/neural-background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NeuralBackground",
    ()=>NeuralBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/theme-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function NeuralBackground() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NeuralBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            let width = window.innerWidth;
            let height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            // Grid properties
            const gridSize = 50;
            // Neural nodes
            const nodes = [];
            const numNodes = Math.floor(width * height / 12000);
            for(let i = 0; i < numNodes; i++){
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5
                });
            }
            let animationFrameId;
            const draw = {
                "NeuralBackground.useEffect.draw": ()=>{
                    ctx.clearRect(0, 0, width, height);
                    // Determine theme visually to avoid layout thrashing, 
                    // but fallback to context if possible
                    const isDark = document.documentElement.classList.contains("dark");
                    const gridColor = isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)";
                    const nodeColor = isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)";
                    const lineColor = isDark ? "rgba(120, 160, 255, " : "rgba(50, 100, 250, ";
                    // Draw Grid
                    ctx.beginPath();
                    for(let x = 0; x <= width; x += gridSize){
                        ctx.moveTo(x, 0);
                        ctx.lineTo(x, height);
                    }
                    for(let y = 0; y <= height; y += gridSize){
                        ctx.moveTo(0, y);
                        ctx.lineTo(width, y);
                    }
                    ctx.strokeStyle = gridColor;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                    // Update and draw nodes
                    nodes.forEach({
                        "NeuralBackground.useEffect.draw": (node)=>{
                            node.x += node.vx;
                            node.y += node.vy;
                            if (node.x < 0 || node.x > width) node.vx *= -1;
                            if (node.y < 0 || node.y > height) node.vy *= -1;
                            ctx.beginPath();
                            ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
                            ctx.fillStyle = nodeColor;
                            ctx.fill();
                        }
                    }["NeuralBackground.useEffect.draw"]);
                    // Draw connections
                    for(let i = 0; i < nodes.length; i++){
                        for(let j = i + 1; j < nodes.length; j++){
                            const dx = nodes[i].x - nodes[j].x;
                            const dy = nodes[i].y - nodes[j].y;
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            if (dist < 150) {
                                ctx.beginPath();
                                ctx.moveTo(nodes[i].x, nodes[i].y);
                                ctx.lineTo(nodes[j].x, nodes[j].y);
                                const opacity = 1 - dist / 150;
                                ctx.strokeStyle = `${lineColor}${opacity * 0.5})`;
                                ctx.lineWidth = 1.2;
                                ctx.stroke();
                            }
                        }
                    }
                    animationFrameId = requestAnimationFrame(draw);
                }
            }["NeuralBackground.useEffect.draw"];
            draw();
            const handleResize = {
                "NeuralBackground.useEffect.handleResize": ()=>{
                    width = window.innerWidth;
                    height = window.innerHeight;
                    canvas.width = width;
                    canvas.height = height;
                }
            }["NeuralBackground.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "NeuralBackground.useEffect": ()=>{
                    window.removeEventListener("resize", handleResize);
                    cancelAnimationFrame(animationFrameId);
                }
            })["NeuralBackground.useEffect"];
        }
    }["NeuralBackground.useEffect"], [
        theme
    ]); // Re-initialize if theme deeply changes, though the inside draw handles class checks
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 z-[-10] pointer-events-none transition-opacity duration-700"
    }, void 0, false, {
        fileName: "[project]/src/components/ui/neural-background.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(NeuralBackground, "1SeC1cCDcQD/CfDZ9wzkDo5yrpE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = NeuralBackground;
var _c;
__turbopack_context__.k.register(_c, "NeuralBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_0nzes6n._.js.map