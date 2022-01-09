<?php

namespace App\Controller;

use App\Form\CerfaType;
use App\Form\IdentityType;
use App\Form\EditProfileType;
use App\Service\UploadManager;
use App\Form\IdentityPictureType;
use App\Form\TaxStampInnerWaterType;
use App\Form\TaxStampCoastalType;
use App\Form\TaxStampDeliveranceType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProfileController extends AbstractController
{
    /**
     * @Route("/profile", name="profile")
     */
    public function index(
        Request $request,
        EntityManagerInterface $manager,
        UploadManager $upload
    ): Response {
        $user = $this->getUser();
        if (!$user) {
            throw $this->createNotFoundException();
        }
        /**
         *  profileForm for editing profile
         */
        $profileForm = $this->createForm(EditProfileType::class, $user);
        $profileForm->handleRequest($request);
        $message = "";
        if ($profileForm->isSubmitted() && $profileForm->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
            $message = "Votre profile a bien été édité !";
        }

        /**
         *  cerfaForm, identityForm, identityPictureForm for upload profile
         */
        $cerfaForm = $this->createForm(CerfaType::class, $user);
        $cerfaForm->handleRequest($request);
        $cerfaFilename = $upload->upload(
            $cerfaForm,
            'cerfa_directory',
            'cerfaFilename'
        );
        if ($cerfaFilename) {
            $user->setCerfaFilename($cerfaFilename);
            $manager->persist($user);
            $manager->flush();
        }

        $identityForm = $this->createForm(IdentityType::class, $user);
        $identityForm->handleRequest($request);
        $identityFilename = $upload->upload(
            $identityForm,
            'identity_directory',
            'identityFilename'
        );
        if ($identityFilename) {
            $user->setIdentityFilename($identityFilename);
                $manager->persist($user);
                $manager->flush();
        }

        $identityPictureForm = $this->createForm(IdentityPictureType::class, $user);
        $identityPictureForm->handleRequest($request);
        $identityPictureFilename = $upload->upload(
            $identityPictureForm,
            'identity_picture_directory',
            'identityPictureFilename'
        );
        if ($identityPictureFilename) {
            $user->setIdentityPictureFilename($identityPictureFilename);
            $manager->persist($user);
            $manager->flush();
        }

        $taxStampDeliveranceForm = $this->createForm(TaxStampDeliveranceType::class, $user);
        $taxStampDeliveranceForm->handleRequest($request);
        $taxStampDeliverance = $upload->upload(
            $taxStampDeliveranceForm,
            'tax_stamp_deliverance',
            'taxStampDeliverance'
        );
        if ($taxStampDeliverance) {
            $user->setTaxStampCoastal($taxStampDeliverance);
            $manager->persist($user);
            $manager->flush();
        }

        $taxStampCoastalForm = $this->createForm(TaxStampCoastalType::class, $user);
        $taxStampCoastalForm->handleRequest($request);
        $taxStampCoastal = $upload->upload(
            $taxStampCoastalForm,
            'tax_stamp_coastal',
            'taxStampCoastal'
        );
        if ($taxStampCoastal) {
            $user->setTaxStampCoastal($taxStampCoastal);
            $manager->persist($user);
            $manager->flush();
        }

        $taxStampInnerWaterForm = $this->createForm(TaxStampInnerWaterType::class, $user);
        $taxStampInnerWaterForm->handleRequest($request);
        $taxStampInnerWater = $upload->upload(
            $taxStampInnerWaterForm,
            'tax_stamp_inner_water',
            'taxStampInnerWater'
        );
        if ($taxStampInnerWater) {
            $user->setTaxStampCoastal($taxStampInnerWater);
            $manager->persist($user);
            $manager->flush();
        }

        return $this->render('profile/index.html.twig', [
            'controller_name' => 'ProfileController',
            'cerfaForm' => $cerfaForm->createView(),
            'identityForm' => $identityForm->createView(),
            'identityPictureForm' => $identityPictureForm->createView(),
            'profileForm' => $profileForm->createView(),
            'taxStampDeliveranceForm' => $taxStampDeliveranceForm->createView(),
            'taxStampCoastalForm' => $taxStampCoastalForm->createView(),
            'taxStampInnerWaterForm' => $taxStampInnerWaterForm->createView(),
            'user' => $user,
            'message' => $message,
        ]);
    }
}
