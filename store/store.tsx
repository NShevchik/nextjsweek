import create from 'zustand'

interface MenuState {
    menu: string
    changeMenu: (menu: string) => void
}

export const useMenuOpen = create<MenuState>((set) => ({
    menu: 'translate-x-[-100%]',
    changeMenu: () => set((state) => ({ menu: state.menu === 'translate-x-[0]' ? 'translate-x-[-100%]' : 'translate-x-[0]' }))
}))