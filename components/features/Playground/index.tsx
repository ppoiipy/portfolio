"use client"

import { useState } from "react"
import { CodeBlock } from "@/components/ui/CodeBlock"
import { registry, type ComponentName } from "./registry"
import { AnimatePresence, motion } from "framer-motion"

export function Playground() {
  const [selected, setSelected] = useState<ComponentName>("Button")
  const [props, setProps] = useState<Record<string, unknown>>(registry.Button.defaultProps)

  const config = registry[selected]
  const Component = config.component

  function selectComponent(name: ComponentName) {
    setSelected(name)
    setProps(registry[name].defaultProps)
  }

  function updateProp(key: string, value: unknown) {
    setProps((prev) => ({ ...prev, [key]: value }))
  }

  const propsString = Object.entries(props)
    .map(([key, value]) => typeof value === "boolean" ? (value ? key : null) : `${key}="${value}"`)
    .filter(Boolean)
    .join(" ")

  const code = `<${selected} ${propsString}>${config.children}</${selected}>`
  const previewKey = `${selected}-${JSON.stringify(props)}`

  return (
    <div className="grid grid-cols-1 gap-0 border border-gray-800 sm:grid-cols-[140px_1fr_180px]">
      {/* Component list */}
      <div className="border-b border-gray-800 p-3 sm:border-b-0 sm:border-r">
        <p className="mb-2 text-xs text-gray-500">components</p>
        <div className="flex flex-col gap-1">
          {(Object.keys(registry) as ComponentName[]).map((name) => (
            <button
              key={name}
              onClick={() => selectComponent(name)}
              className={`rounded px-2 py-1 text-left text-sm ${selected === name
                ? "bg-gray-800 text-white"
                : "text-gray-400 hover:text-white"
                }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="flex items-center justify-center border-b border-gray-800 p-10 sm:border-b-0 sm:border-r">
        <AnimatePresence mode="wait">
          <motion.div
            key={previewKey}
            initial={{ opacity: 0, y: 0.96 }}
            animate={{ opacity: 1, y: 1 }}
            exit={{ opacity: 0, y: 0.96 }}
            transition={{ duration: 0.15 }}
          >
            <Component {...props}>{config.children}</Component>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="p-3">
        <p className="mb-2 text-xs text-gray-500">props</p>
        <div className="flex flex-col gap-4">
          {config.controls.map((control) => (
            <div key={control.propName}>
              <p className="mb-1 text-xs text-gray-400">{control.label}</p>
              {control.type === "select" ? (
                <select
                  value={props[control.propName] as string}
                  onChange={(e) => updateProp(control.propName, e.target.value)}
                  className="w-full rounded border border-gray-700 bg-gray-900 px-2 py-1 text-sm text-white"
                >
                  {control.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="checkbox"
                  checked={props[control.propName] as boolean}
                  onChange={(e) => updateProp(control.propName, e.target.checked)}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Code snippet */}
      <div className="col-span-full border-t border-gray-800">
        <CodeBlock code={code} language="tsx" />
      </div>
    </div>
  )
}