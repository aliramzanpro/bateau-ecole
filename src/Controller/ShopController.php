<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ShopController extends AbstractController
{
    /**
     * @Route("/boutique", name="shop")
     */
    public function index(ProductRepository $products): Response
    {
        dd($products);
        return $this->render('shop/index.html.twig', [
            'products' => $products,
        ]);
    }
}
