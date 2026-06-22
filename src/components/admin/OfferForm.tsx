'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface OfferFormData {
  id?: string
  name: string
  category: string
  brand: string
  slug: string
  destinationUrl: string
  fallbackUrl: string
  payoutAmount: string
  status: string
  subIdParamName: string
  appendClickId: boolean
  notes: string
}

interface OfferFormProps {
  initial?: Partial<OfferFormData>
  siteId: string
}

const defaultForm: OfferFormData = {
  name: '',
  category: '',
  brand: '',
  slug: '',
  destinationUrl: '',
  fallbackUrl: '',
  payoutAmount: '',
  status: 'active',
  subIdParamName: 'subid',
  appendClickId: true,
  notes: '',
}

export default function OfferForm({ initial, siteId }: OfferFormProps) {
  const [form, setForm] = useState<OfferFormData>({ ...defaultForm, ...initial })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const isEdit = !!initial?.id

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')

    const url = isEdit ? `/api/offers/${initial!.id}` : '/api/offers'
    const method = isEdit ? 'PUT' : 'POST'

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        siteId,
        payoutAmount: form.payoutAmount ? parseFloat(form.payoutAmount) : null,
      }),
    })

    if (res.ok) {
      router.push('/admin/offers')
      router.refresh()
    } else {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to save offer.')
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-[680px]">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-2.5 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#172026] mb-1">Offer Name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-[#F7FAFC] border border-[#E7EEF2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#172026] mb-1">Slug * (used in /go/slug)</label>
          <input
            type="text"
            required
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
            className="w-full bg-[#F7FAFC] border border-[#E7EEF2] rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#172026] mb-1">Category</label>
          <input
            type="text"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full bg-[#F7FAFC] border border-[#E7EEF2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#172026] mb-1">Brand</label>
          <input
            type="text"
            value={form.brand}
            onChange={(e) => setForm({ ...form, brand: e.target.value })}
            className="w-full bg-[#F7FAFC] border border-[#E7EEF2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#172026] mb-1">Destination URL *</label>
        <input
          type="url"
          required
          value={form.destinationUrl}
          onChange={(e) => setForm({ ...form, destinationUrl: e.target.value })}
          className="w-full bg-[#F7FAFC] border border-[#E7EEF2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
          placeholder="https://..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#172026] mb-1">Fallback URL (if paused)</label>
        <input
          type="url"
          value={form.fallbackUrl}
          onChange={(e) => setForm({ ...form, fallbackUrl: e.target.value })}
          className="w-full bg-[#F7FAFC] border border-[#E7EEF2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
          placeholder="/injection-types/"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#172026] mb-1">Payout Amount (USD)</label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={form.payoutAmount}
            onChange={(e) => setForm({ ...form, payoutAmount: e.target.value })}
            className="w-full bg-[#F7FAFC] border border-[#E7EEF2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#172026] mb-1">Status</label>
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="w-full bg-[#F7FAFC] border border-[#E7EEF2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
          >
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="placeholder">Placeholder</option>
            <option value="archived">Archived</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#172026] mb-1">SubID Param Name</label>
          <input
            type="text"
            value={form.subIdParamName}
            onChange={(e) => setForm({ ...form, subIdParamName: e.target.value })}
            className="w-full bg-[#F7FAFC] border border-[#E7EEF2] rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="appendClickId"
          checked={form.appendClickId}
          onChange={(e) => setForm({ ...form, appendClickId: e.target.checked })}
          className="rounded"
        />
        <label htmlFor="appendClickId" className="text-sm text-gray-700">
          Append click ID to destination URL
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#172026] mb-1">Notes</label>
        <textarea
          rows={3}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className="w-full bg-[#F7FAFC] border border-[#E7EEF2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
        />
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="bg-brand-500 hover:bg-brand-600 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors disabled:opacity-50"
        >
          {saving ? 'Saving...' : isEdit ? 'Update Offer' : 'Create Offer'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/offers')}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
