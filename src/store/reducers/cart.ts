import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: CardapioItem[]

  isOpen: boolean
  isOpenDelivery: boolean
  isOpenPayment: boolean
  isOpenConfirmationPayment: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isOpenDelivery: false,
  isOpenPayment: false,
  isOpenConfirmationPayment: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      const produto = state.items.find((item) => item.id === action.payload.id)

      if (!produto) {
        state.items.push(action.payload)
      } else {
        alert('O produto já está no carrinho')
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    openDelivery: (state) => {
      state.isOpenDelivery = true
    },
    closeDelivery: (state) => {
      state.isOpenDelivery = false
    },
    openPayment: (state) => {
      state.isOpenPayment = true
    },
    closePayment: (state) => {
      state.isOpenPayment = false
    },
    openConfirmationPayment: (state) => {
      state.isOpenConfirmationPayment = true
    },
    closeConfirmationPayment: (state) => {
      state.isOpenConfirmationPayment = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  openDelivery,
  closeDelivery,
  closePayment,
  openPayment,
  closeConfirmationPayment,
  openConfirmationPayment,
  clear
} = cartSlice.actions
export default cartSlice.reducer
