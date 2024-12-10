'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Coffee, MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react'

export default function CafeWebsite() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'menu':
        return <MenuPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Уютное Кафе</h1>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => setCurrentPage('home')} className="text-muted-foreground hover:text-primary">Главная</button>
            <button onClick={() => setCurrentPage('menu')} className="text-muted-foreground hover:text-primary">Меню</button>
            <button onClick={() => setCurrentPage('contact')} className="text-muted-foreground hover:text-primary">Контакты</button>
          </nav>
          <Button variant="outline">Заказать онлайн</Button>
        </div>
      </header>

      <main>
        {renderPage()}
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Уютное Кафе. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center">
      <img
        src="/placeholder.svg?height=700&width=1200&text=Уютный+Интерьер+Кафе"
        alt="Уютный интерьер кафе"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative text-center text-white z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Добро пожаловать в Уютное Кафе</h2>
        <p className="text-xl mb-8">Где каждый глоток рассказывает историю</p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Посмотреть меню
        </Button>
      </div>
    </section>
  )
}

function MenuPage() {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-8 text-center">Наше меню</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Эспрессо", price: "150 ₽", description: "Насыщенный и крепкий" },
            { title: "Капучино", price: "200 ₽", description: "Сливочный с идеальной пенкой" },
            { title: "Латте", price: "220 ₽", description: "Мягкий и успокаивающий" },
            { title: "Мокко", price: "250 ₽", description: "Шоколадно-кофейное наслаждение" },
            { title: "Круассан", price: "120 ₽", description: "Масляный и слоёный" },
            { title: "Тост с авокадо", price: "350 ₽", description: "Свежий и питательный" },
          ].map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{item.title}</span>
                  <span className="text-primary">{item.price}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-8 text-center">Свяжитесь с нами</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Посетите нас</h4>
            <div className="space-y-4">
              <p className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                ул. Кофейная, 123, г. Москва, 123456
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                +7 (495) 123-45-67
              </p>
              <p className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary" />
                Пн-Пт: 7:00-22:00, Сб-Вс: 8:00-23:00
              </p>
            </div>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Отправьте нам сообщение</h4>
            <form className="space-y-4">
              <Input placeholder="Ваше имя" />
              <Input type="email" placeholder="Ваш email" />
              <Textarea placeholder="Ваше сообщение" />
              <Button type="submit" className="w-full">Отправить сообщение</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}